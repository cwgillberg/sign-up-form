const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirm-password");
const button = document.querySelector("button");
const passwordField = document.querySelector("#pass-error");
const inputGrid = document.querySelector(".inputs");

confirmPassword.addEventListener("keyup", validatePassword);

window.addEventListener("load", toggleButton("off"));

function validatePassword() {
    if(password.value === confirmPassword.value || confirmPassword.value === "") {
        toggleButton("on");
        setError("off");
    } else {
        setError("on");
    }
}

function toggleButton(state) {
    if(state === "on") {
        button.disabled = false;
        button.style.opacity = 1;
    } else {
        button.disabled = true;
        button.style.opacity = 0.5;
    }
}

function getError() {
    let errorBody = document.createElement("p");
    let errorText = document.createTextNode("Sorry! These passwords don't match");
    errorBody.style.textAlign= "center";
    errorBody.appendChild(errorText);   
    return errorBody;
}

function setError(state) {
    if(state === "on") {
        if(inputGrid.childElementCount === 2) {
            inputGrid.appendChild(getError());
            inputGrid.style.padding = "10px 20px 10px 20px";
        }
    } else {
        inputGrid.removeChild(inputGrid.lastChild);
        inputGrid.style.padding = "10px 20px 50px 20px";
    }
   
}

