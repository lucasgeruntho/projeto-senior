
function toggleOpcoes() {
  var opcoesDiv = document.querySelector ('.texto-com-linha');
  opcoesDiv.classList.toggle('active');
}

function toggleBackground() {
  var background = document.getElementById("background");
  background.style.display = (background.style.display === "none" || background.style.display === "") ? "block" : "none";

}


document.addEventListener("DOMContentLoaded", function() {
  var textoElement = document.getElementById('texto');
  var isTextSelected = localStorage.getItem('isTextSelected');
  if (isTextSelected === 'true') {
    textoElement.classList.add('selected');
    document.querySelector('.options').style.display = 'block';
  }
});

function toggleSelected(element) {
  element.classList.toggle("selected");
  var isTextSelected = element.classList.contains('selected');
  localStorage.setItem('isTextSelected', isTextSelected);
  var options = document.querySelector('.options');
  options.style.display = isTextSelected ? 'block' : 'none';
}