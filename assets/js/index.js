document.getElementById('login').addEventListener('click', function () {
    document.querySelector('.bg-modal').style.display = 'flex';
    document.querySelector('.bg-modal .container').style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
    document.getElementById('remove').classList.remove('fixed-top');
});
document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.bg-modal').style.display = 'none';
    document.querySelector('body').style.overflow = 'scroll';
    document.getElementById('remove').classList.add('fixed-top');
});
// document.querySelector('.new').addEventListener('click', function () {
//     document.querySelector('.bg-modal .container').style.display = 'none';
//     document.querySelector('.bg-modal .message').style.display = 'block';
// });
let container = document.querySelector('.container'),
    showHide = document.querySelectorAll('.show-hide'),
    password = document.querySelectorAll('.password'),
    signUp = document.querySelector('.signup-link'),
    login = document.querySelector('.login-link'),
    forms =document.querySelector('.forms');

showHide.forEach(eyeIcon=>{
    eyeIcon.addEventListener("click",()=>{
        password.forEach(password =>{
            if(password.type === 'password'){
                password.type = 'text';
                showHide.forEach(icon =>{
                    icon.classList.replace("fa-eye-slash","fa-eye")
                })
            }else{
                password.type = 'password';
                showHide.forEach(icon =>{
                    icon.classList.replace("fa-eye","fa-eye-slash")
                })
            }
        })
    })
})
signUp.addEventListener("click",( )=>{
    forms.style.height='540px'
    forms.style.marginLeft='-100%'
});
login.addEventListener("click",( )=>{
    forms.style.height='430px'
    forms.style.marginLeft='0%'
});
//  function display (a){
//     a
//     return a;
//  }
// var displayNone = document.querySelector('.bg-modal').style.display = 'none';
// var displayresult = document.querySelector('.bg-modal').style.display = 'flex';















