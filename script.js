// Hamburger Icon funtionality
let menu = document.querySelector('#menu');
let header = document.querySelector('.header')

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

// For on Click Intrahyperlink remove navbar
function removeNavbar(){
  menu.classList.toggle('fa-times');
  header.classList.toggle('active');
}


// for scrolling to top of page
let mybtn = document.getElementById('mybtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybtn.style.display = "block";
  } else {
      mybtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// For Downloading Resume
function downloadResume() {
    var link = document.createElement('a');
    link.href = '/Pooja_Bhagat_Resume.pdf';  // Replace with the actual path to your resume file
    link.download = 'Pooja_Bhagat_Resume.pdf';  // Replace with the desired name of the downloaded file
    link.click();
}


//  For Email sending 
function sendEmail(){
  let name = document.getElementById('name').value
  let email = document.getElementById('email').value
  let message = document.getElementById('message').value

  var body = "Name: " + name + "\n";
  body += "Email: " + email + "\n\n";
  body += "Message:\n" + message;

  window.location.href = "mailto:poojabhagat5801@gmail.com?subject=New Message from Portfolio&body=" + encodeURIComponent(body);

  document.getElementById("contactForm").reset();

  // console.log(body)
}
