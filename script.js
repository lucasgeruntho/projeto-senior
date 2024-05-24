
function toggleOpcoes() {
  var opcoesDiv = document.querySelector ('.texto-com-linha');
  opcoesDiv.classList.toggle('active');
}

function toggleBackground() {
  var background = document.getElementById("background");
  background.style.display = (background.style.display === "none" || background.style.display === "") ? "block" : "none";

}


document.addEventListener("DOMContentLoaded", function() {
  var isTextSelected = localStorage.getItem('isTextSelected');
  if (isTextSelected === 'true') {
    document.getElementById('texto').classList.add('selected');
    document.querySelector('.options').style.display = 'block';
  }

  var isTextSelectede = localStorage.getItem('isTextSelectede');
  if (isTextSelectede === 'true') {
    document.getElementById('texto-1').classList.add('selectede');
    document.querySelector('.options2').style.display = 'block';
  }
});

function toggleSelected(element) {
  var otherElement = document.getElementById('texto-1');
  var otherOptions = document.querySelector('.options2');
  if (element.classList.contains("selected")) {
    element.classList.remove("selected");
    document.querySelector('.options').style.display = 'none';
    localStorage.setItem('isTextSelected', false);
  } else {
    element.classList.add("selected");
    document.querySelector('.options').style.display = 'block';
    localStorage.setItem('isTextSelected', true);
    if (otherElement.classList.contains("selectede")) {
      otherElement.classList.remove("selectede");
      otherOptions.style.display = 'none';
      localStorage.setItem('isTextSelectede', false);
    }
  }
}

function ToggleSelection(element) {
  var otherElement = document.getElementById('texto');
  var otherOptions = document.querySelector('.options');
  if (element.classList.contains("selectede")) {
    element.classList.remove("selectede");
    document.querySelector('.options2').style.display = 'none';
    localStorage.setItem('isTextSelectede', false);
  } else {
    element.classList.add("selectede");
    document.querySelector('.options2').style.display = 'block';
    localStorage.setItem('isTextSelectede', true);
    if (otherElement.classList.contains("selected")) {
      otherElement.classList.remove("selected");
      otherOptions.style.display = 'none';
      localStorage.setItem('isTextSelected', false);
    }
  }
}






var dropdownVisible = false;

function toggleDropdown() {
  var dropdownContent = document.getElementById("btncontent");
  var caretDown = document.querySelector(".caret-down");
  var caretUp = document.querySelector(".caret-up");
  dropdownVisible = !dropdownVisible;
  if (dropdownVisible) {
    dropdownContent.style.display = "block";
    caretDown.style.display = "none";
    caretUp.style.display = "block";
  } else {
    dropdownContent.style.display = "none";
    caretDown.style.display = "block";
    caretUp.style.display = "none";
  }
}

document.addEventListener('click', function(event) {
  var isClickInsideDropdown = document.getElementById('btncontent').contains(event.target);
  var isClickOnButton = event.target.closest('.btn-nav-people');

  if (!isClickInsideDropdown && !isClickOnButton) {
    var dropdownContent = document.getElementById('btncontent');
    var caretDown = document.querySelector(".caret-down");
    var caretUp = document.querySelector(".caret-up");
    dropdownContent.style.display = 'none';
    caretDown.style.display = "block";
    caretUp.style.display = "none";
    dropdownVisible = false;
  }
});

