
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




// primeiro botão

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



// segundo botão

var dropdownVisible2 = false;

  function toggleDropdown2() {
    var dropdownContent = document.getElementById("btncontent-2");
    var caretDown = document.querySelector(".caret-down-2");
    var caretUp = document.querySelector(".caret-up-2");
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
      var caretDown = document.querySelector(".caret-down-2");
      var caretUp = document.querySelector(".caret-up-2");
      var button = document.querySelector(".btn-nav-2");
      dropdownContent.style.display = 'none';
      caretDown.style.display = "block";
      caretUp.style.display = "none";
      button.classList.remove("select");
      dropdownVisible2 = false;
    }
  });





// terceio botão
  var dropdownVisible3 = false;

  function toggleDropdown3() {
    var dropdownContent = document.getElementById("btncontent-3");
    var caretDown = document.querySelector(".caret-down-3");
    var caretUp = document.querySelector(".caret-up-3");
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
      var caretDown = document.querySelector(".caret-down-3");
      var caretUp = document.querySelector(".caret-up-3");
      var button = document.querySelector(".btn-nav-third");

      dropdownContent.style.display = 'none';
      caretDown.style.display = "block";
      caretUp.style.display = "none";
      button.classList.remove("active");
      dropdownVisible3 = false;
    }
  });


// quarto botão

  var dropdownVisible4 = false;

  function toggleDropdown4() {
    var dropdownContent = document.getElementById("btncontent-4");
    var caretDown = document.querySelector(".caret-down-4");
    var caretUp = document.querySelector(".caret-up-4");
    var button = document.querySelector(".btn-nav-fourth");

    dropdownVisible4 = !dropdownVisible4;
    if (dropdownVisible4) {
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
    var isClickInsideDropdown = document.getElementById('btncontent-4').contains(event.target);
    var isClickOnButton = event.target.closest('.btn-nav-people-fourth');
    var button = document.querySelector(".btn-nav-fourth");

    if (!isClickInsideDropdown && !isClickOnButton) {
      var dropdownContent = document.getElementById('btncontent-4');
      var caretDown = document.querySelector(".caret-down-4");
      var caretUp = document.querySelector(".caret-up-4");
      dropdownContent.style.display = 'none';
      caretDown.style.display = "block";
      caretUp.style.display = "none";
      dropdownVisible4 = false;
      button.classList.remove("select");
    }
  });


  // fechamento 




// Abertura da minha quarta pessoa
  var dropdownVisible5 = false;

  function toggleDropdown5() {
    var dropdownContent = document.getElementById("btncontent-5");
    var caretDown = document.querySelector(".caret-down-5");
    var caretUp = document.querySelector(".caret-up-5");
    var button = document.querySelector(".btn-nav-fifth");

    dropdownVisible5 = !dropdownVisible5;
    if (dropdownVisible5) {
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
    var isClickInsideDropdown = document.getElementById('btncontent-5').contains(event.target);
    var isClickOnButton = event.target.closest('.btn-nav-people-fifth');
    var button = document.querySelector(".btn-nav-fifth");

    if (!isClickInsideDropdown && !isClickOnButton) {
      var dropdownContent = document.getElementById('btncontent-5');
      var caretDown = document.querySelector(".caret-down-5");
      var caretUp = document.querySelector(".caret-up-5");
      dropdownContent.style.display = 'none';
      caretDown.style.display = "block";
      caretUp.style.display = "none";
      dropdownVisible5 = false;
      button.classList.remove("select");
    }
  });

// fechamento
 

// Abertura 

var dropdownVisible6 = false;

  function toggleDropdown6() {
    var dropdownContent = document.getElementById("btncontent-6");
    var caretDown = document.querySelector(".caret-down-6");
    var caretUp = document.querySelector(".caret-up-6");
    var button = document.querySelector(".btn-nav-friday");

    dropdownVisible6 = !dropdownVisible6;
    if (dropdownVisible6) {
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
    var isClickInsideDropdown = document.getElementById('btncontent-6').contains(event.target);
    var isClickOnButton = event.target.closest('.btn-nav-people-friday');
    var button = document.querySelector(".btn-nav-friday");

    if (!isClickInsideDropdown && !isClickOnButton) {
      var dropdownContent = document.getElementById('btncontent-6');
      var caretDown = document.querySelector(".caret-down-6");
      var caretUp = document.querySelector(".caret-up-6");
      dropdownContent.style.display = 'none';
      caretDown.style.display = "block";
      caretUp.style.display = "none";
      dropdownVisible6 = false;
      button.classList.remove("select");
    }
  });



  // fechamento



  var dropdownVisible7 = false;

  function toggleDropdown7() {
    var dropdownContent = document.getElementById("btncontent-7");
    var caretDown = document.querySelector(".caret-down-7");
    var caretUp = document.querySelector(".caret-up-7");
    var button = document.querySelector(".btn-nav-decima");

    dropdownVisible7 = !dropdownVisible7;
    if (dropdownVisible7) {
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
    var isClickInsideDropdown = document.getElementById('btncontent-7').contains(event.target);
    var isClickOnButton = event.target.closest('.btn-nav-people-decima');
    var button = document.querySelector(".btn-nav-decima");

    if (!isClickInsideDropdown && !isClickOnButton) {
      var dropdownContent = document.getElementById('btncontent-7');
      var caretDown = document.querySelector(".caret-down-7");
      var caretUp = document.querySelector(".caret-up-7");
      dropdownContent.style.display = 'none';
      caretDown.style.display = "block";
      caretUp.style.display = "none";
      dropdownVisible7 = false;
      button.classList.remove("select");
    }
  });





  // fechamento na minha 7 pessoa




  
  var dropdownVisible8 = false;

  function toggleDropdown8() {
    var dropdownContent = document.getElementById("btncontent-8");
    var caretDown = document.querySelector(".caret-down-8");
    var caretUp = document.querySelector(".caret-up-8");
    var button = document.querySelector(".btn-nav-eleven");

    dropdownVisible8 = !dropdownVisible8;
    if (dropdownVisible8) {
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
    var isClickInsideDropdown = document.getElementById('btncontent-8').contains(event.target);
    var isClickOnButton = event.target.closest('.btn-nav-people-eleven');
    var button = document.querySelector(".btn-nav-eleven");

    if (!isClickInsideDropdown && !isClickOnButton) {
      var dropdownContent = document.getElementById('btncontent-8');
      var caretDown = document.querySelector(".caret-down-8");
      var caretUp = document.querySelector(".caret-up-8");
      dropdownContent.style.display = 'none';
      caretDown.style.display = "block";
      caretUp.style.display = "none";
      dropdownVisible8 = false;
      button.classList.remove("select");
    }
  });



