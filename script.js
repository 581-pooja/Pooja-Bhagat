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


//  For Email sending 
function sendEmail(){
  let name = document.getElementById('name').value
  let email = document.getElementById('email').value
  let message = document.getElementById('message').value

  let Body = `Name: ${name} <br> Email: ${email} <br> Message: ${message}`

  Email.send({
      Host : "smtp.gmail.com",
      Username : "poojabhagat7021594137@gmail.com",
      Password : "tepovkorcoyqhetg",
      To : 'poojabhagat7021594137@gmail.com',
      From : `${email}`,
      Subject : `${email}`,
      Body :  `${Body}`

  }).then(
    message => {
      if(message == 'OK'){
          alert("message sended sucessfully");
      }
      else{
          alert("There is error at sending message.");
      }
    }
    
  );
}
