/*
TODO:
Password validation



*/

const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirm-password");
const button = document.querySelector("button");

confirmPassword.addEventListener("keyup", validatePassword);

function validatePassword() {
    if(password.value === confirmPassword.value) {
        console.log("ok");
    } else {
       button.textContent = "haha nope"
    }
}