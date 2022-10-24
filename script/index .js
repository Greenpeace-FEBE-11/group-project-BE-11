const APIURL = "https://6350c1a178563c1d82c78809.mockapi.io/user";
let loginForm= document.querySelector("#login")
let inputemail = document.querySelector('#email')
let inputPassword = document.querySelector('#password')
getData(APIURL);
async function getData(APIURL){
  const response = await fetch(APIURL);
  const responseData = await response.json();
  console.log(responseData)
  responseData.forEach(item => {
    showData(item)
  })
  function showData(data){
    loginForm.addEventListener("submit", (Event =>{
      Event.preventDefault()
      
      let userLogin = {
        email:inputemail.value,
        password:inputPassword.value
      }

      let signin = userLogin.email == data.email &&
                  userLogin.password == data.password;

                  if (signin){
                    window.location.href="home.html"
                  } else {
                    
                    alert("Email dan Password anda salah")
                  }
    }))
  }
}


// const url = 'https://6350c1a178563c1d82c78809.mockapi.io/user';

// async function getMockApi(url) {
//   const response = await fetch(url);

//   const result = response.json();

//   return result;
// }

// async function postMockApi(url, payload) {
//   const response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     body: new URLSearchParams(payload)
//   });

//   const result = response.json();

//   return result;
// }

// document.getElementById('signin').addEventListener('submit', function(e) {
//   e.preventDefault();

//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;


//   if (email && password) {
//     getMockApi(`${url}/user`).then(function(users) {
//       const loggingUser = users.find(function(user) {
//         return user.email === email;
//       });

//       if (loggingUser) {
//         console.log('melakukan proses login.....');
//         if (loggingUser.password === password) {
//           console.log('login berhasil....');
//           localStorage.setItem('user_id', loggingUser.id);
//           window.location.href= 'home.html';
//         } else {
//           console.log('password salah!!!');
//         }
//       } else {
//         console.log('user tidak ditemukan.....');
//       }
//     });
//   }
// });