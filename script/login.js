
var email = document.getElementById("logemail");
var logpem = document.getElementById("logpem");

// When the user clicks on the password field, show the message box
email.onfocus = function() {
  document.getElementById("logmessageemail").style.display = "block";
}

// When the user clicks outside of the password field, hide the logmessageemail box
email.onblur = function() {
  document.getElementById("logmessageemail").style.display = "none";
}

// When the user starts to type something inside the password field

email.onkeyup = function() {
  var coba = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(email.value.match(coba)) {  
    logpem.classList.remove("invalid");
    logpem.classList.add("valid");
  } else {
    logpem.classList.remove("valid");
    logpem.classList.add("invalid");
  }
};








  

var myInput = document.getElementById("logpassword");
var letter = document.getElementById("logletter");
var capital = document.getElementById("logcapital");
var number = document.getElementById("lognumber");
var length = document.getElementById("loglength");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("logmessage").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("logmessage").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}









const url = 'https://635365eee822bad5278bfe37.mockapi.io';

async function getMockApi(url) {
  const response = await fetch(url);

  const result = response.json();

  return result;
}

async function postMockApi(url, payload) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(payload)
  });

  const result = response.json();

  return result;
}

document.getElementById('logform').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('logemail').value;
  const password = document.getElementById('logpassword').value;

  if (email && password) {
    getMockApi(`${url}/user`).then(function(users) {
      const loggingUser = users.find(function(user) {
        return user.email === email;
      });

      if (loggingUser) {
        console.log('melakukan proses login');
        if (loggingUser.password === password) {
          console.log('masuk landing');
          localStorage.setItem('user_id', loggingUser.id);
          window.location = 'landing.html';
        } else {
          alert('password salah!!!');
        }
      } else {
        alert('Email tidak ditemukan');
      }
    });
  }
});