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
                    window.location.href="landing.html"
                    localStorage.setItem('user_id',signin.id)
                  } else {
                    
                    alert("Email dan Password anda salah")
                  }
    }))
  }
}

