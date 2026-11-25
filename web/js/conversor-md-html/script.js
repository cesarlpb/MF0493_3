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

  // 1. Leer de markdown input: id "markdown-input"
  let html = document.getElementById("markdown-input").value
  // 2. Refactor con Regex
  // casos h3, h2, h1
  html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>")
  html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>")
  html = html.replace(/^# (.+)$/gm, "<h1>$1</h1>")
  // casos: strong y em
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>")
  html = html.replace(/__(.+?)__/g, "<strong>$1</strong>")
  html = html.replace(/_(.+?)_/g, "<em>$1</em>")
  // img y a
  html = html.replace(/!\[(.+?)\]\((.+?)\)/g, '<img alt="$1" src="$2">')
  html = html.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
  // blockquote
  html = html.replace(/^[ \t]*> (.+)$/gm, "<blockquote>$1</blockquote>")

  return html
}

// Añadimos event listener al markdown-input:
const input = document.getElementById("markdown-input");

input.addEventListener("input", () => {
  const html = convertMarkdown();
  // 3. añadimos preview del HTML
  // 4. Escribimos resultado en Output: id "html-output"
  document.getElementById("html-output").textContent = html;
  document.getElementById("preview").innerHTML = html;
});