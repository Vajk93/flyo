// sticky navbar
window.onscroll = function() {
  let poz = window.scrollY;
  const navbar = document.getElementById('navbar');

    if (poz > 150) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
}



// mobile menu open/close
const mobileMenu = document.getElementById('mobileMenu');

function openNav() {
  document.getElementById("mobileMenu").style.width = "100%";
}

function closeNav() {
  document.getElementById("mobileMenu").style.width = "0%";
}


// email validation
function ValidateEmail() {

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var inputField = document.getElementById('email');
  var formH1Title = document.getElementById('formH1Title');
  var formParagraph = document.getElementById('formParagraph');
  var email = document.getElementById('email');

  if(inputField.value.match(mailformat)) {
    formH1Title.innerHTML = "Succesful Registration!";
    formParagraph.innerHTML = "Thank you! Welcome on board!";
    formH1Title.style.color = "hsl(176, 68%, 64%)";
    formParagraph.style.color = "hsl(176, 68%, 64%)";
    inputField.value = "";
    inputField.style.border = "none";
    email.parentNode.remove();
  } else {
    document.getElementById("formId").action = "file:///Users/Vajk/Desktop/Programming/fylo-dark-theme-landing-page-master/index.html?#form-section";
    inputField.style.border = "2px solid red";
    formH1Title.innerHTML = "Please enter a valid email address";
    formParagraph.innerHTML = "It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.";
    formH1Title.style.color = "var(--white)";
    formParagraph.style.color = "var(--white)";
  }
}



// lazy loading (not started yet)


