
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
  var button = document.querySelector(".btn-nav");
  dropdownVisible = !dropdownVisible;
  if (dropdownVisible) {
    dropdownContent.style.display = "block";
    caretDown.style.display = "none";
    caretUp.style.display = "block";
    button.classList.add("select");
  } else {
    dropdownContent.style.display = "none";
    caretDown.style.display = "block";
    caretUp.style.display = "none";
    button.classList.remove("select");
  }
}

document.addEventListener('click', function(event) {
  var isClickInsideDropdown = document.getElementById('btncontent').contains(event.target);
  var isClickOnButton = event.target.closest('.btn-nav-people');

  if (!isClickInsideDropdown && !isClickOnButton) {
    var dropdownContent = document.getElementById('btncontent');
    var caretDown = document.querySelector(".caret-down");
    var caretUp = document.querySelector(".caret-up");
    var button = document.querySelector(".btn-nav");
    dropdownContent.style.display = 'none';
    caretDown.style.display = "block";
    caretUp.style.display = "none";
    dropdownVisible = false;
    button.classList.remove("select");
  }
});





var dropdownVisible2 = false;

  function toggleDropdown2() {
    var dropdownContent = document.getElementById("btncontent-2");
    var caretDown = document.querySelector(".caret-down");
    var caretUp = document.querySelector(".caret-up");
    var button = document.querySelector(".btn-nav-2");
    dropdownVisible2 = !dropdownVisible2;
    if (dropdownVisible2) {
      dropdownContent.style.display = "block";
      caretDown.style.display = "none";
      caretUp.style.display = "block";
      button.classList.add("select");
    } else {
      dropdownContent.style.display = "none";
      caretDown.style.display = "block";
      caretUp.style.display = "none";
      button.classList.remove("select");
    }
  }

  document.addEventListener('click', function(event) {
    var isClickInsideDropdown = document.getElementById('btncontent-2').contains(event.target);
    var isClickOnButton = event.target.closest('.btn-nav-people-2');

    if (!isClickInsideDropdown && !isClickOnButton) {
      var dropdownContent = document.getElementById('btncontent-2');
      var caretDown = document.querySelector(".caret-down");
      var caretUp = document.querySelector(".caret-up");
      var button = document.querySelector(".btn-nav-2");
      dropdownContent.style.display = 'none';
      caretDown.style.display = "block";
      caretUp.style.display = "none";
      button.classList.remove("select");
      dropdownVisible2 = false;
    }
  });






  var dropdownVisible3 = false;

  function toggleDropdown3() {
    var dropdownContent = document.getElementById("btncontent-3");
    var caretDown = document.querySelector(".caret-down");
    var caretUp = document.querySelector(".caret-up");
    var button = document.querySelector(".btn-nav-third");

    dropdownVisible3 = !dropdownVisible3;

    if (dropdownVisible3) {
      dropdownContent.style.display = "block";
      caretDown.style.display = "none";
      caretUp.style.display = "block";
      button.classList.add("active");
    } else {
      dropdownContent.style.display = "none";
      caretDown.style.display = "block";
      caretUp.style.display = "none";
      button.classList.remove("active");
    }
  }

  document.addEventListener('click', function(event) {
    var isClickInsideDropdown = document.getElementById('btncontent-3').contains(event.target);
    var isClickOnButton = event.target.closest('.btn-nav-people-third');

    if (!isClickInsideDropdown && !isClickOnButton) {
      var dropdownContent = document.getElementById('btncontent-3');
      var caretDown = document.querySelector(".caret-down");
      var caretUp = document.querySelector(".caret-up");
      var button = document.querySelector(".btn-nav-third");

      dropdownContent.style.display = 'none';
      caretDown.style.display = "block";
      caretUp.style.display = "none";
      button.classList.remove("active");
      dropdownVisible3 = false;
    }
  });