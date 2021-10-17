let btn1 = document.getElementById("btn1");
let otpDisplay = document.getElementById("otp-display");
let timer = document.getElementById("otp-contain");

function clear() {
    otpDisplay.innerText = "";
}


btn1.addEventListener('click', function (){
    let OTP = '';

    for (let i = 0; i < 6; i++)
    {
        OTP += Math.floor(Math.random()*10);
    }

    otpDisplay.innerText = OTP;

    setInterval(clear, 10000);

})

let parentLink = document.getElementById("parent-link");
let facebookLink = document.getElementById("facebook-link");
let whatsappLink = document.getElementById("whatsapp-link");
let twitterLink = document.getElementById("twitter-link");
let gmailLink = document.getElementById("gmail-link");

var showState = false;

parentLink.addEventListener('click', function (){
    if(showState == false){
        facebookLink.style.transform = "translateX(0)";
        whatsappLink.style.transform = "translateX(0)";
        twitterLink.style.transform = "translateY(0)";
        gmailLink.style.transform = "translateY(0)";
        facebookLink.style.transitionDelay = "1s";
        whatsappLink.style.transitionDelay = "1s";

        showState  = true;
    }else{
        facebookLink.style.transform = "";
        facebookLink.style.transition = ".7s";
        whatsappLink.style.transform = "";
        whatsappLink.style.transition = ".7s";
        twitterLink.style.transform = "";
        twitterLink.style.transitionDelay = ".5s";
        gmailLink.style.transform = "";
        gmailLink.style.transitionDelay = ".5s";
        facebookLink.style.transitionDelay = "0";
        whatsappLink.style.transitionDelay = "0";

        showState = false;
    }
})