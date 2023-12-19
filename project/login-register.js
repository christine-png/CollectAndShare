
function handleSubmitRegister(){
    
    let password = document.getElementById("password").value;
    let labelMessage = document.getElementById("invalidMessage");

    if(password.length < 8){
        labelMessage.innerHTML = "Das Passwort muss mindestens 8 Zeichen lang sein";
        return false;
    }
    
    labelMessage.innerHTML = " ";
    return true;
}

function handleLogIn(){

    let loginInactive = document.getElementById("loginInactive");
    let loginActive = document.getElementById("loginActive");

    loginInactive.style.display = "none";
    loginActive.style.display = "flex";

    let registerInactive = document.getElementById("registerInactive");
    let registerActive = document.getElementById("registerActive");

    registerInactive.style.display = "flex";
    registerActive.style.display = "none";

    let login = document.getElementById("login");
    let register = document.getElementById("register");

    login.classList.add("wide");
    register.classList.add("small");

}

function handleRegister(){

    let loginInactive = document.getElementById("loginInactive");
    let loginActive = document.getElementById("loginActive");

    loginInactive.style.display = "flex";
    loginActive.style.display = "none";

    let registerInactive = document.getElementById("registerInactive");
    let registerActive = document.getElementById("registerActive");

    registerInactive.style.display = "none";
    registerActive.style.display = "flex";

    let login = document.getElementById("login");
    let register = document.getElementById("register");

    login.classList.remove("wide");
    register.classList.remove("small");

}

function mobileLogin(){

    let register = document.getElementById("register");
    register.style.display = "none";

    let login = document.getElementById("login");
    login.style.display = "flex";
}

function mobileRegister(){

    let register = document.getElementById("register");
    register.style.display = "flex";

    let login = document.getElementById("login");
    login.style.display = "none";
}