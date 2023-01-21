let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");

let loginUserButton = document.getElementById("login-user");
let userLoginURL="https://reqres.in/api/login"
loginUserButton.addEventListener("click",function(){

    let obj={
      username: loginUserUsername.value,
      password: loginUserPassword.value
    }

    console.log(obj);
    loginUser(obj)
  
  })
  
  async function loginUser(userData){
  
    let res=await fetch(userLoginURL,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(userData)
    })
  
    // console.log(res)
    if(res.ok===true){
        window.location.href= "adminDasboard.html"
    } 
  
    let myData= await res.json()
    console.log(myData);
  
    localStorage.setItem("localAccessToken",myData.token)
  }