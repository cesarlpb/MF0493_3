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
  // para cada elemento hay que mirar que caso es:
  for(const line of arr){
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
              .replace("__", "</strong>")
      console.log(line, html) // debug
    }
    // cursiva con em: casi lo mismo
  }
  // 3. Buscamos que etiqueta debemos crear

  // 4. Escribimos resultado en Output: id "html-output"
  document.getElementById("html-output").innerText = html
}

// Ejecutar o llamar a la función:
// convertMarkdown()