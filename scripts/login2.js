let submit_otp_button = document.getElementById("submit-otp");
let sec2 = document.getElementById("sec");
let input_otp_number = document.getElementById("input-otp-number");
let resend_otp = document.getElementById("resend-otp");
let footer3 = document.getElementById("footer-content");

footer3.style.marginTop = "300px";

function createOtp(){
    let create_otp2;
    let myInterval2;
    create_otp2 = Math.floor(100000 + Math.random() * 900000);
    alert(`Dear Customer Your OTP is ${create_otp2}.\nThis is valid only for 15 seconds and can be used only once.`);
    sec2.style.display = "block";
    let seconds2 = 15;
    myInterval2 = setInterval(function(){
        seconds2--;
        sec2.innerText = seconds2 + "s";
        if(seconds2 <= 0){
            sec2.style.display = "none";
            seconds2 = 15;
            create_otp2 = 0;
            clearInterval(myInterval2);
            resend_otp.style.display = "block";
        }
    }, 1000)

    input_otp_number.addEventListener("keyup", () => {
        if(input_otp_number.value.length == 6){
            submit_otp_button.style.backgroundColor = "#ff147b";
        }
    })

    submit_otp_button.addEventListener("click", () => {
        if(input_otp_number.value.length == 6){
            if(input_otp_number.value == create_otp2){
                alert("Login Successfull...!");
                clearInterval(myInterval2);
                sec.innerText = "";
                window.location.href = "./index.html";
            }else{
                alert("OTP not Matched");
                resend_otp.style.display = "block";
                input_otp_number.value = "";
                
            }
        }
    })

}

createOtp();


resend_otp.addEventListener("click", () => {
    input_otp_number.value = "";
    createOtp()
})