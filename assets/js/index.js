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
changeBackgoundOfBgmodal = () => {
    document.querySelector('.bg-modal').style.background = 'rgba(0, 0, 0, 0.3)';
}
changeBackgoundOfBgmodalAgain = () => {
    document.querySelector('.bg-modal').style.background = 'rgba(0, 0, 0, 0.7)';
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
    document.querySelector('.bg-modal .signup-message').style.display = 'block';
}
hideSignupMessageOfBgmodal = () => {
    document.querySelector('.bg-modal .signup-message').style.display = 'none';
    hideBgmodal();
    scrollBody();
    addFixedtopClass();
}
loginStyle = () => {
    forms.style.height = '430px'
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
});
document.querySelector('.signup-button').addEventListener('click', function () {
    showBgmodal();
    hideContainerOfBgmodal();
    changeBackgoundOfBgmodal();
    showSignupMessageOfBgmodal();
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
    forms.style.height = '540px'
    forms.style.marginLeft = '-100%'
});
login.addEventListener("click", () => {
loginStyle();
});
//  function display (a){
//     a
//     return a;
//  }
// var displayNone = document.querySelector('.bg-modal').style.display = 'none';
// var displayresult = document.querySelector('.bg-modal').style.display = 'flex';















