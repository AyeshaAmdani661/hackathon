let signupMessage = document.querySelector('.bg-modal .signup-message');
scrollBody = () => {
    document.querySelector('body').style.overflow = 'scroll';
}
hiddenBody = () => {
    document.querySelector('body').style.overflow = 'hidden';
}
addFixedtopClass = () => {
    document.getElementById('remove').classList.add('fixed-top');
}
removeFixedtopClass = () => {
    document.getElementById('remove').classList.remove('fixed-top');
}
showBgmodal = () => {
    document.querySelector('.bg-modal').style.display = 'flex';
}
hideBgmodal = () => {
    document.querySelector('.bg-modal').style.display = 'none';
}
showContainerOfBgmodal = () => {
    document.querySelector('.bg-modal .container').style.display = 'block';
}
hideContainerOfBgmodal = () => {
    document.querySelector('.bg-modal .container').style.display = 'none';
}
showLoginMessageOfBgmodal = () => {
    document.querySelector('.bg-modal .login-message').style.display = 'block';
}
hideLoginMessageOfBgmodal = () => {
    document.querySelector('.bg-modal .login-message').style.display = 'none';
    hideBgmodal();
    scrollBody();
    addFixedtopClass();
}
showSignupMessageOfBgmodal = () => {
    signupMessage.style.display = 'block';
}
hideSignupMessageOfBgmodal = () => {
    document.querySelector('.bg-modal .signup-message').style.display = 'none';
}
loginStyle = () => {
    forms.style.height = '410px'
    forms.style.marginLeft = '0%'
}
close = () => {
    hideBgmodal();
    scrollBody();
    addFixedtopClass();
    loginStyle();
}
document.getElementById('login').addEventListener('click', function () {
    showBgmodal();
    showContainerOfBgmodal();
    hiddenBody();
    removeFixedtopClass();
});
document.querySelector('.close').addEventListener('click', function () {
    close();
});
document.querySelector('.login-button').addEventListener('click', function () {
    showBgmodal();
    hideContainerOfBgmodal();
    changeBackgoundOfBgmodal();
    showLoginMessageOfBgmodal();
    clearAllField();
});
signupFunction = () => {
    document.querySelector('.signup-button').addEventListener('click', function () {
        showBgmodal();
        showSignupMessageOfBgmodal();
    });
}
checkFieldValues= (name, email, password, confirmPassword)=>{
    if (document.getElementById(name).value === "" && document.getElementById(email).value === ""
        && document.getElementById(password).value === "" && document.getElementById(confirmPassword).value === "") {
        signupMessage.innerHTML = 'Please Enter All The Fields.';
        signupFunction();
    }
}
checkPasswords =(name, email, password, confirmPassword)=>{
    if ((document.getElementById(name).value !== "" && document.getElementById(email).value !== ""
    && document.getElementById(password).value !== "" && document.getElementById(confirmPassword).value !== "") 
    && document.getElementById(password).value !== document.getElementById(confirmPassword).value) {
        signupMessage.innerHTML = 'Please Check Your Passwords.';
        signupFunction();
    }
}
checkFieldValues1= (name, email, password, confirmPassword)=>{
    if  ((document.getElementById(name).value !== "" && document.getElementById(email).value !== ""
    && document.getElementById(password).value !== "" && document.getElementById(confirmPassword).value !== "")
    &&(document.getElementById(password).value === document.getElementById(confirmPassword).value)) {
        signupMessage.innerHTML = 'Congratulations<b class="color"> ! </b><br> You Are Member Now.';
        signupFunction();
        hideContainerOfBgmodal();
    }
}
checkFields = (name, email, password, confirmPassword) => {
    checkFieldValues(name, email, password, confirmPassword);
    checkPasswords(name, email, password, confirmPassword);
    checkFieldValues1(name, email, password, confirmPassword);
}
document.querySelector('.signup-message').addEventListener('click', function () {
    hideSignupMessageOfBgmodal();
    showBgmodal();
    showContainerOfBgmodal();
});
















let container = document.querySelector('.container'),
    showHide = document.querySelectorAll('.show-hide'),
    password = document.querySelectorAll('.password'),
    signUp = document.querySelector('.signup-link'),
    login = document.querySelector('.login-link'),
    forms = document.querySelector('.forms');

showHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        password.forEach(password => {
            if (password.type === 'password') {
                password.type = 'text';
                showHide.forEach(icon => {
                    icon.classList.replace("fa-eye-slash", "fa-eye")
                })
            } else {
                password.type = 'password';
                showHide.forEach(icon => {
                    icon.classList.replace("fa-eye", "fa-eye-slash")
                })
            }
        })
    })
})
signUp.addEventListener("click", () => {
    forms.style.height = '490px'
    forms.style.marginLeft = '-100%'
});
// login.addEventListener("click", () => {
// loginStyle();
// });
//  function display (a){
//     a
//     return a;
//  }
// var displayNone = document.querySelector('.bg-modal').style.display = 'none';
// var displayresult = document.querySelector('.bg-modal').style.display = 'flex';















