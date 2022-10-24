const APIURL = "https://635365eee822bad5278bfe37.mockapi.io";
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
                    window.location.href="dampak.html"
                  } else {
                    
                    alert("Email dan Password anda salah")
                  }
    }))
  }
}

