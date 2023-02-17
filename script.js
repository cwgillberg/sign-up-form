const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirm-password");
const button = document.querySelector("button");
const passwordField = document.querySelector("#pass-error");
const inputGrid = document.querySelector(".inputs");

confirmPassword.addEventListener("keyup", validatePassword);


function validatePassword() {
    if(password.value === confirmPassword.value || confirmPassword.value === "") {
        setError("off");
    } else {
        setError("on");
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
            confirmPassword.style.border = "2px solid red";
            password.style.border = "2px solid red";
        }
    } else {
        inputGrid.removeChild(inputGrid.lastChild);
        confirmPassword.style.border = "2px solid lightgray";
        password.style.border = "2px solid lightgray";
        inputGrid.style.padding = "10px 20px 50px 20px";
    }
   
}

