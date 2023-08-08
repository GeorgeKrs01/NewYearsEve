
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYears = '1 Jan 2024';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    // const seconds = Math.abs(Math.floor((currentDate - newYearsDate) / 1000));
    // const mins = Math.abs(Math.floor(seconds / 60));
    // const hours = Math.abs(Math.floor(mins / 60));
    // const days = Math.abs(Math.floor(hours));

    console.log(days, hours, mins , seconds);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);


// function countdown() {
//     const date1 = new Date(newYears);
//     const date2 = new Date();
//     const diffTime = Math.abs(date2 - date1);
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
//     console.log(diffTime + " milliseconds");
//     console.log(diffDays + " days");
// }

// countdown();
