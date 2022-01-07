// sticky navban
window.onscroll = function() {
  let poz = window.scrollY;
  const navbar = document.getElementById('navbar');

  // console.log(poz);
    if (poz > 150) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
}



// bar toggle on mobile 
const mobileMenu = document.getElementById('mobileMenu');

function openNav() {
  document.getElementById("mobileMenu").style.width = "100%";
}

function closeNav() {
  document.getElementById("mobileMenu").style.width = "0%";
}





// email validation
 //nem jó, mert újra tölti valamiért az oldalt. pedig jó lenne, próbáld ki úgy hogy nézed közbne 
function ValidateEmail() {

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var inputField = document.getElementById('email');
  var formH1Title = document.getElementById('formH1Title');
  var formParagraph = document.getElementById('formParagraph');
  var email = document.getElementById('email');
  var formBtn = document.getElementById('formBtn');

  if(inputField.value.match(mailformat)) {
    //alert("Succesful Registration!");
    //document.getElementById("formId").action = "https://www.google.com";
    formH1Title.innerHTML = "Succesful Registration!";
    formParagraph.innerHTML = "Thank you! Welcome on board!";
    formH1Title.style.color = "hsl(176, 68%, 64%)";
    formParagraph.style.color = "hsl(176, 68%, 64%)";
    inputField.value = "";
    inputField.style.border = "none";
    email.parentNode.remove();
  } else {
    //alert("Please enter a valid email address");
    document.getElementById("formId").action = "file:///Users/Vajk/Desktop/Programming/fylo-dark-theme-landing-page-master/index.html?#form-section";
    inputField.style.border = "2px solid red";
    formH1Title.innerHTML = "Please enter a valid email address";
    formParagraph.innerHTML = "It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.";
    formH1Title.style.color = "var(--white)";
    formParagraph.style.color = "var(--white)";
  }

}


// swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});





// lazy loading

// form data sending
