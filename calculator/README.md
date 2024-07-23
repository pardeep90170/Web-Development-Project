<!-- HTML -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="calculator">
        <input type="text" placeholder="0" id="inputbox" readonly>
        <div>
            <button class="operator ac">Ac</button>
            <button class="operator del">Del</button>
            <button class="operator">%</button>
            <button class="operator">/</button>
        </div>
        <div>
            <button >7</button>
            <button >8</button>
            <button >9</button>
            <button class="operator">*</button>
        </div>
        <div>
            <button >4</button>
            <button >5</button>
            <button >6</button>
            <button class="operator">-</button>
        </div>
        <div>
            <button >1</button>
            <button >2</button>
            <button >3</button>
            <button class="operator">+</button>
        </div>
        <div>
            <button >00</button>
            <button >0</button>
            <button >.</button>
            <button class="equalbt">=</button>
        </div>
    </div><!-- end calculator -->

    <script src="app.js"></script>
</body>
</html>
<!-- CSS -->
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    font-weight: bold;
}

body{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("image/bg.jpg");
    background-size: cover;
}

.calculator{
    padding: 20px;
    border: 2px solid black;
    border-radius: 16px;
    box-shadow: 0px 3px 15px rgba(0,0,0,.8);
}
input{
    width: 320px;
    padding: 24px;
    margin: 10px;
    background: rgba(255, 255, 255, 0.3);
    box-shadow: inset 0px 0px 8px rgba(0, 0,0, 0.4);
    font-size: 65px;
    text-align: right;
    color: rgb(212, 50, 50);
    border-radius: 16px;
    text-shadow: 0px 1px 5px rgba(0,0,0,0.2);
}
input::placeholder{
    color: white;
}
button{
    width: 60px;
    height: 60px;
    margin: 10px;
    color: white;
    background: rgba(0, 0,0, 0.7);
    font-size: 24px;
    cursor: pointer;
    border-radius: 25px;
    text-shadow: 0px 1px 5px rgba(0,0,0,0.2);
    box-shadow: -1px 2px 10px rgba(0,0,0,0.5);;
}
.ac, .del{
    font-size: 20px;
}
button:hover{
    color: white;
    background: #f67c14;
}
.equalbt{
    background: #f67c14;
}
.operator{
    background: #f67c14;
}

<!-- JAVA SCRIPT -->
let display = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let buttonsarray = Array.from(buttons);
let string ='';

buttonsarray.forEach( (btn) => {
    btn.addEventListener('click',(e) => {
        if (e.target.innerHTML =='Del'){
            string = string.substring(0,string.length-1)
            display.value =string;
        }else if(e.target.innerHTML =='Ac'){
            string = "";
            display.value =string;
        }else if(e.target.innerHTML == '='){
            string = eval(string);
            display.value =string;
        }else{
            string += e.target.innerHTML;
            display.value =string;
        }
        

    });
});








