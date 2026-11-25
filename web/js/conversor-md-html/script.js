/* Markdown:
* # texto -> <h1> texto </h1>
* ## título 2 -> <h2>título 2</h2>
* 
* Para 1 -> <p>Para 1</p>
* Para 2 -> <p>Para 2</p>
* bold
* italic
* blockquote ?
* ul
* ol
* img ?
* etc
*/ 

function convertMarkdown(){
  // expresiones regulares para convertir MD a HTML:
  //
  // # ## ### -> h1, h2, h3
  // # Título -> h1
  // 
  // bold o negritas:
  // ** __
  // **texto** -> strong
  // __texto__ -> strong
  // 
  // italics o cursiva:
  // *texto* -> em
  // _texto_ -> em

  // Simplificación: cada etiqueta viene en una línea nueva
  let html = ""
  // 1. Leer de markdown input: id "markdown-input"
  let md = document.getElementById("markdown-input").value
  // 2. Leer cada línea: texto -> arr con split de "\n"
  let arr = md.split("\n") // \n indica salto de línea
  let bprev = "" // línea anterior a la anterior
  let prev = ""  // línea anterior, por defecto vacía
  // refactor con Regex
  // casos h3, h2, h1
  md = md.replace(/^### (.+)$/gm, "<h3>$1</h3>")
  md = md.replace(/^## (.+)$/gm, "<h2>$1</h2>")
  md = md.replace(/^# (.+)$/gm, "<h1>$1</h1>")
  // casos: strong y em
  md = md.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
  md = md.replace(/\*(.+?)\*/g, "<em>$1</em>")
  md = md.replace(/__(.+?)__/g, "<strong>$1</strong>")
  md = md.replace(/_(.+?)_/g, "<em>$1</em>")
  // img y a

  // blockquote
  
  // para cada elemento hay que mirar que caso es:
  for(const line of arr){
    console.log("bprev, prev, line:", bprev, prev, line)
    // aplicamos el cambio de md a html
    if(line.startsWith("### ")){
      html += line.replace("### ", "<h3>") + "</h3>" + "\n"
      console.log(line, html) // debug
    }
    else if(line.startsWith("## ")){
      html += line.replace("## ", "<h2>") + "</h2>" + "\n"
      console.log(line, html) // debug
      // Nota: si hay ## o ### sale mal -> Revisar
    }
    else if(line.startsWith("# ")){
      html += line.replace("# ", "<h1>") + "</h1>" + "\n"
      console.log(line, html) // debug
      // Nota: si hay ## o ### sale mal -> Revisar
    }
    // Suponemos que no mezclamos h1, h2, h3 con strong
    // negritas con strong: ** o __ --> <strong>
    if(line.includes("**") || line.includes("__")){
      html += line.replace("**", "<strong>")
              .replace("__", "<strong>")
              .replace("**", "</strong>")
              .replace("__", "</strong>") + "\n"
      console.log(line, html) // debug
    }
    // cursiva con em: casi lo mismo
    else if(line.includes("*") || line.includes("_")){
      html += line.replace("*", "<em>")
              .replace("_", "<em>")
              .replace("*", "</em>")
              .replace("_", "</em>") + "\n"
      console.log(line, html) // debug
    }
    // ![alt-text](image-source)
    // <img src="image-source" alt="alt-text">
    if(line.includes("![")){
      let l = line.replace("![", "").replace(")", "")
      let [alt, img] = l.split("](")
      html += "<img src=\"" + img + " alt=\"" + alt + "\">"
      console.log(line, html) // debug
    }
    // [link text](URL)
    // <a href="URL">link text</a>
    else if(line.startsWith("[") && line.includes("](") && line.includes(")")){
      let l = line.replace("[", "").replace(")", "")
      let [text, href] = l.split("](")
      html += "<a href=\"" + href + "\">" + text + "</a>"
      console.log(line, html) // debug
    }
    // > línea 1 
    // > línea 2
    // 
    // <blockquote>línea 1
    //             línea 2</blockquote>
    if(line.startsWith("> ")){
      // empezamos blockquote, continuamos, o cerramos blockquote
      // empezar   -> bprev, prev, line = sin >, sin >, > 
      // continuar -> bprev, prev, line = >, >, >
      // cerrar    -> bprev, prev, line = >, >, sin >
      if(!bprev.startsWith("> ") && !prev.startsWith("> ") && line.startsWith("> ")){
        html += "<blockquote>" + line.replace("> ", "") + "\n"
      } else if(bprev.startsWith("> ") && prev.startsWith("> ") && line.startsWith("> ")){
        html += " " + line.replace("> ", "") + "\n"
      } else {
        html += " " + line.replace("> ", "") + "\n"
      }
    }
    // caveats: si no hay mas línea no cierra
    // solución: considerar índice del array
    // cambiaremos por expresiones regulares
    if(prev.startsWith("> ") && !line.startsWith("> ") ){
      html += "</blockquote>\n" + line + "\n"
      }
    // deberiamos excluir todos los casos anteriores
    //if (line.trim().length > 0) {
    //  html += "<p>" + line + "</p>\n"
    //}
    if(prev){
      bprev = prev
    }
    prev = line 
  }
  // 3. añadimos preview del HTML
  document.getElementById("preview").innerHTML = html

  // 4. Escribimos resultado en Output: id "html-output"
  document.getElementById("html-output").innerText = html
}

// Ejecutar o llamar a la función:
// convertMarkdown()