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








