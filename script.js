const numberHours = document.querySelector('.number-hours');
const clockBarSeconds = document.querySelector('.clock-bar-second');

const numberElement =[];
const clockBarSecondsElement =[];

for(let i = 1; i <=12; i++){
    numberElement.push(`<span style="--index:${i}"><p>${i}</p></span>`)
}

numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));

for(let i = 1; i <=60; i++){
    clockBarSecondsElement.push(`<span style="--index:${i}"><p><h>${i}</h></p></span>`)
}

clockBarSeconds.insertAdjacentHTML("afterbegin", clockBarSecondsElement.join(""));

// clock timing

let hr = document.getElementById('hour');
let mm = document.getElementById('min');
let ss = document.getElementById('sec');

function displayTime(){
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hour.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000)

