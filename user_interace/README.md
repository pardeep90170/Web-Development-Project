<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Interface</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
  <div class="container">
    <div class="form-box">
        <h1 class="title">Sign Up</h1>
        <div class="underline"></div>
        <form >
            <div class="input-group">
                <div class="input-field namefield">
                    <i class="fa-solid fa-user"></i>
                    <input type="text" placeholder="Name">
                </div>

                <div class="input-field emailfield">
                    <i class="fa-solid fa-at"></i>
                    <input type="email" placeholder="Email">
                </div>

                <div class="input-field passwordfield">
                    <i class="fa-solid fa-key"></i>
                    <input type="password" placeholder="Password">
                </div>
                <p><span class="text">Password Suggestions: </span><a href="#"class="click"> Click Here!</a></p>
            </div>
            <div class="btn-field">
                <button type="button" class="signupbtn">Sign up</button>
                <button type="button" class="disable signinbtn">Sign in</button>
            </div>
        </form>
    </div>
  </div>
    <script src="app.js"></script>
</body>
</html>

<!-- CSS CODE -->
* {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
}


.container {
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.4)),url('image/bg.webp');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

}

.form-box{
    width: 90%;
    max-width: 450px;
    min-width: 350px;
    background:transparent;
    padding: 55px;
    text-align: center;
    border-radius: 10px;
    box-shadow: -2px 2px 15px rgba(0,0,0,0.5);
}

.form-box h1{
    font-size: 1.9rem;
    color: green;
}

.form-box .underline{
    width: 30px;
    height: 4px;
    background: green;
    margin: 10px auto 50px auto;
    border-radius: 5px;
    transition: transform .5s;
}

.input-field {
    background: #eaeaea;
    margin: 15px 0;
    border-radius: 10px;
    display: flex;
    align-items: center;

    max-height: 60px;
    transition: max-height 0.5s;
    overflow: hidden;
}

.input-field input{
    width: 100%;
    background: transparent;
    border: 0;
    outline: none;
    padding: 18px 15px;
}

.input-field i{
   margin: 15px;
   color: #999;
}

form p{
    text-align: left;
    font-size: 0.9;
    color: rgb(174, 165, 226);
    font-weight: 500;
}

form p a{
    text-decoration: none;
    color: rgb(4, 82, 4);
}

.btn-field{
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.btn-field button {
    flex-basis: 48%;
    background: green;
    color:#999;
    height: 2.1rem;
    border-radius: 20px;
    border: 0 ;
    outline: 0;
    cursor: pointer;
    transition: background 1s;
}

.input-group {
    height: 280px;
}

button.disable {
    background: #eaeaea;
    color: #999;
}

<!-- JAVA SCRIPT CODE -->
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


