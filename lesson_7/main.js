let div = document.createElement('div');
div.textContent = 0;
document.body.append(div);
div.id = 'timer';

let button = document.createElement('button');
button.textContent = 'button';
document.body.append(button);
button.id = 'button';

let input = document.createElement('input');
input.textContent = '';
document.body.append(input);
input.id = 'time'

let timerInput = document.getElementById("time"); 
let buttonRun = document.getElementById("button");
let timerShow = document.getElementById("timer"); 

buttonRun.addEventListener('click', function () {
    timeMinut = parseInt(timerInput.value) * 60
});

timer = setInterval(function () {
    seconds = timeMinut % 60 
    minutes = timeMinut / 60 % 60 
    hour = timeMinut / 60 / 60 % 60 

    if (timeMinut <= 0) {
        clearInterval(timer);
        alert("Time is finish");
    } else {
        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
        timerShow.innerHTML = strTimer;
    }
    --timeMinut; 
}, 1000)
