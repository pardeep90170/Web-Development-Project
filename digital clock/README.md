<!-- HTML -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Clock</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="digital-clock">
        <div class="time">
            <div class="left-side">
                <span id="hours">00</span>
            </div><!--   end left-side -->
            <div class="right-side">
                <div class="right-top">
                    <span id="dot">:</span>
                    <span id="minute">00</span>
                </div><!-- end right-top -->
                <div class="right-down">
                    <span id="period">pm</span>
                    <span id="seconds">00</span>
                </div>
            </div><!-- end right-side -->
        </div><!--   end time -->
    </div><!-- </div> end digital-clock -->
    

    <script src="app.js"></script>
</body>
</html>
<!-- CSS -->
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
body, .time, .left-side, .right-side, .right-top, .right-down {
    display: flex;
    justify-content: center;
    align-items: center;
}
body {
    min-height: 80vh;
    background: #2e2e45;
}
.digital-clock, .time, .right-side, .right-top, .right-down {
    position: relative;
}

.digital-clock::before{
    content: "";
    position: absolute;
    background: linear-gradient(45deg, blue,ornage,green);
    background-size: 200% 200%;
    top: -5px;
    left: -5px;
    bottom: -5px;
    right: -5px;
    z-index: -1;
    filter: blur(30px);
    animation: glowing 5s ease infinte;
}
@keyframes glowing{
    0%{
        background-position: 0% 50%;
    }
    50%{
        background-position: 100% 50%;
    }
    100%{
        background-position: 0% 50%;
    }
}
.digital-clock {
    color: white;
    background: #2d2f38;
    width: 425px;
    padding: 20px 45px;
    
    border-radius: 10px;
}
#hours {
    font-weight: 600;
    padding: 0 10px;
    line-height: 125px;
    font-size: 8rem;
    background: -webkit-linear-gradient(90deg, blue, white);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}
.right-side {
    flex-direction: column;
}
#dot {
    font-size: 4em;
    transform: translateY(-3px);
    color: grey;
}
#minute {
    font-size: 5em;
    font-weight: 500;
    margin-left: 10px;
    transform: translateY(10px);
    background: -webkit-linear-gradient(90deg, orchid, white);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}
.right-down {
    margin-top: 10px;
    transform: translateY(-25px);
}
#period, #seconds {
    font-size: 1.8em;
    font-weight: 500;
    margin-left:50px;
}
#period {
    color: orange;
}
#seconds {
    color: white;
}
<!-- JAVA SCRIPT -->
function clock(){
    let hours = document.getElementById('hours');
    let minute = document.getElementById('minute');
    let second = document.getElementById('seconds');
    let period = document.getElementById('period');
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let ampm = h >= 12 ? "PM" : "AM";
    if (h > 12){
        h=h -12;
    }
    h = (h <10) ? "0"+ h : h;
    m = (m <10) ? "0"+ m : m;
    s = (s <10) ? "0"+ s : s;

    hours.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
    period.innerHTML = ampm;

};

setInterval(clock,1000);
