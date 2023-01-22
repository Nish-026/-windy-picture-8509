let verify_number = document.getElementById("verify-number");
let otp_input = document.getElementById("otp");
let show_password = document.getElementById("show-password");
let password = document.getElementById("password");
let registration_form = document.getElementById("registration-form");
let gender = document.getElementsByName("gender");
let sec = document.getElementById("seconds");
let mobile_num = document.getElementById("mobile_number");

let user_details = JSON.parse(localStorage.getItem("user-details"));

// ------------------------------------ Event Listener to Enable Verify OTP ----------------------------------------------------
let create_otp;
let myInterval;
verify_number.addEventListener("click", (e) => {
    if(mobile_num.value.length < 1){
        alert("Please Enter Mobile Number");
        location.reload();
        
    }else{
        user_details.forEach( el => {
            if(el.mobile_no == mobile_num.value){
                alert("Mobile Number Already Registered");
                location.reload();
            }
        })
    }
    e.stopPropagation();

    otp_input.style.display = "block";
    verify_number.style.display = "none";
    create_otp = Math.floor(100000 + Math.random() * 900000);
    alert(`Dear Customer Your OTP is ${create_otp}.\nThis is valid only for 15 seconds and can be used only once.`);
    sec.style.display = "block";
    let seconds = 15;

    // -----------Time Interval for OTP
    myInterval = setInterval(function(){
        seconds--;
        sec.innerText = seconds + "s";
        if(seconds <= 0){
            otp_input.style.display = "none";
            sec.style.display = "none";
            seconds = 15;
            clearInterval(myInterval);
            verify_number.style.display = "inline";
            verify_number.innerText = "RESEND";
            create_otp = 0;
        }
    }, 1000)
})

// -------------To Check OTP
otp_input.addEventListener("keyup", () => {
    if(otp_input.value.length == 6){
        if(otp_input.value == create_otp){
            alert("OTP Matched");
            otp_input.setAttribute("disabled", "true");
            clearInterval(myInterval);
            sec.innerText = "";

        }else{
            verify_number.style.display = "inline";
            verify_number.innerText = "RESEND";
        }
    }
})



// ----------------------------------------Event Listener to Show Password ----------------------------------------------------------
show_password.addEventListener("click", () => {
    if(password.type == "password"){
        password.type = "text";
        show_password.innerText = "HIDE";
    }else{
        password.type = "password";
        show_password.innerText = "SHOW";
    }
})




// ------------------------------------------------------------ Adding Data into Local Storage -----------------------------------------
if(user_details == null){
    user_details = [];
}

registration_form.addEventListener("submit", (event) => {
    event.preventDefault();
    if(registration_form.name.value == "" || registration_form.email.value == "" || registration_form.mobile_number.value == "" || registration_form.otp.value == "" || registration_form.password.value == ""){
        alert("Please Fill All The Details...!");
    }else{

        // ----------------------------- User Object ----------------------------------
        let user_data_object = {
            name: registration_form.name.value,
            email: registration_form.email.value, 
            mobile_no: registration_form.mobile_number.value,
            user_password: registration_form.password.value,
            gender: gender.value,
            user_wishList: [],
            user_cartList: [],
            user_address: [],
            user_payments: []
        }
        // localStorage.clear();
        user_details.push(user_data_object);
        localStorage.setItem("user-details", JSON.stringify(user_details));
        alert("Congratulations your account is created...!");
            window.location.href = "./login.html";
    }
})

