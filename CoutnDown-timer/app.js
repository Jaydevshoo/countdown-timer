const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById("hours");
const minutesE1 = document.getElementById("minutes");
const secondsE1 = document.getElementById("seconds");



const newYears = '1 jan 2023';

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 /24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    // console.log(days, hours, minutes, seconds)
    daysE1.innerText = days;
    hoursE1.innerText = hours;
    minutesE1.innerText = minutes;
    secondsE1.innerText = seconds;

}
//initial call
countdown();

setInterval(countdown, 1000);