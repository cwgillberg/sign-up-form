const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirm-password");
const button = document.querySelector("button");
const passwordField = document.querySelector("#pass-error");
const confirmPassField = document.querySelector("#confirm-error");

confirmPassword.addEventListener("keyup", validatePassword);

window.addEventListener("load", toggleButton("off"));

/*
VALIDATION PSEUDO CODE
1. BUTTON IS DISABLED BY DEFAULT
2. IF PASSWORDS MATCH -> ENABLE BUTTON
3. IF PASSWORDS DO NOT MATCH -> DISPLAY ERROR
4. WHEN PASSWORDS MATCH -> REMOVE ERROR, ENABLE BUTTON
*/


function validatePassword() {
    if(password.value === confirmPassword.value) {
        toggleButton("on");
    } else {
        getError();
    }
}

function toggleButton(state) {
    if(state === "on") {
        button.disabled = "enabled"
    } else {
        button.disabled = "disabled"
        button.style.opacity = 0.5;
    }
}


function getError() {
    let errorBody = document.createElement("p");
    let errorText = document.createTextNode("Sorry! These passwords don't match");
    errorBody.appendChild(errorText);
    confirmPassField.appendChild(errorBody);
}