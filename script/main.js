
var email = document.getElementById("email");
var pem = document.getElementById("pem");

// When the user clicks on the password field, show the message box
email.onfocus = function() {
  document.getElementById("messageemail").style.display = "block";
}

// When the user clicks outside of the password field, hide the messageemail box
email.onblur = function() {
  document.getElementById("messageemail").style.display = "none";
}

// When the user starts to type something inside the password field

email.onkeyup = function() {
  var coba = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(email.value.match(coba)) {  
    pem.classList.remove("invalid");
    pem.classList.add("valid");
  } else {
    pem.classList.remove("valid");
    pem.classList.add("invalid");
  }
};








  

var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
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






var myInput2 = document.getElementById("password2");
var pem2 = document.getElementById("pem2");


// When the user clicks on the password field, show the message box
myInput2.onfocus = function() {
  document.getElementById("messagepassword").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput2.onblur = function() {
  document.getElementById("messagepassword").style.display = "none";
}

// When the user starts to type something inside the password field
myInput2.onkeyup = function() {
  // Validate lowercase letters
 
  if (myInput.value == myInput2.value) {  
    pem2.classList.remove("invalid");
    pem2.classList.add("valid");
 } else {
    pem2.classList.remove("valid");
    pem2.classList.add("invalid");
  }

};


const url = 'https://6350c1a178563c1d82c78809.mockapi.io';


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


async function getMockApi(url) {
  const response = await fetch(url);

  const result = response.json();

  return result;
}



document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();



  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const password2 = document.getElementById('password2').value;


 let cekem="no";
var atps=email.indexOf("@");
	var dots=email.lastIndexOf(".");
	if (atps<1 || dots<atps+2 || dots+2>=email.length) {
		
	} else {
        cekem="yes";
    } 


let cekpass="no";


if (password2 == password) {
    cekpass="yes";
} 



if (cekem=="yes" && cekpass=="yes") {
 


  if (email && password) {
    getMockApi(`${url}/user`).then(function(users) {
      console.log('users', users);
      const isUserExists = users.find(function(user) {
        return user.email === email
      });
      console.log('isUserExists', isUserExists);

      if (isUserExists) {
        alert('email sudah dipakai');
      } else {
        postMockApi(`${url}/user`, {
          email,
          password,
        })
          .then((result) => {
            document.getElementById('email').value = '';
            document.getElementById('password').value = '';
    
            window.location = 'login.html';
          })
      }
    });
  }




}
});
