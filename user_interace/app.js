let signupbtn = document.querySelector('.signupbtn');
let signinbtn = document.querySelector('.signinbtn');
let namefield = document.querySelector('.namefield');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let text = document.querySelector('.text');

signinbtn.addEventListener('click', () => {
    namefield.style.maxHeight = '0';
    title.innerHTML = 'Sign In';
    text.innerHTML = 'Forget Password';
    signupbtn.classList.add('disable');
    signupbtn.classList.remove('clicked');
    signinbtn.classList.add('clicked');
    signinbtn.classList.remove('disable');
    underline.style.transform = 'translateX(35px)';
});

signupbtn.addEventListener('click', () => {
    namefield.style.maxHeight = '60px';
    title.innerHTML = 'Sign Up';
    text.innerHTML = 'Password Suggestion';
    signupbtn.classList.add('clicked');
    signupbtn.classList.remove('disable');
    signinbtn.classList.add('disable');
    signinbtn.classList.remove('clicked');
    underline.style.transform = 'translateX(0px)';
});
