let input_mobile_number = document.getElementById("input-mobile-number");
let login_button = document.getElementById("login-button");
let user_data = JSON.parse(localStorage.getItem("user-details"));
let current_user = JSON.parse(localStorage.getItem("current-user"));
let footer2 = document.getElementById("footer-content");
footer2.style.marginTop = "300px";

current_user = null;
input_mobile_number.addEventListener("keyup", () => {
    if(input_mobile_number.value.length == 10){
        login_button.style.backgroundColor = "#ff147b";
        login_button.removeAttribute("disabled", "true");
    }else if(input_mobile_number.value.length < 10){
        login_button.setAttribute("disabled", "true");
    }
})
input_mobile_number.addEventListener("keydown", () => {
    login_button.style.backgroundColor = "rgb(195, 192, 192)";
})

login_button.addEventListener("click", () => {
    if(user_data == null){
        window.location.href = "./register.html";
    }else{
        user_data.forEach((element, index) => {
            if(element.mobile_no == input_mobile_number.value){
                current_user = element;
                localStorage.setItem("current-user", JSON.stringify(current_user));
                window.location.href = "./login2.html";
            }
            if(index == user_data.length - 1 && current_user == null){
                window.location.href = "./register.html";
                console.log("NO");
            }
        });
    }
})