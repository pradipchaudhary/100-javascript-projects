// DOM Element
const hourEl = document.querySelector(".hour");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");
const periodEl = document.querySelector(".period");
// calendar DOM element select
const monthsEl = document.querySelector(".month-name");
const daysEl = document.querySelector(".day-name");
const dayNumbersEl = document.querySelector(".day-number");
const yearsEl = document.querySelector(".year");

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

//Get current time in javascript
const clock = () => {
    const today = new Date();
    const hour = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    const month = today.getMonth();

    // add to the DOM element
    hourEl.innerHTML = addZero(period(hour));
    minutesEl.innerHTML = addZero(minutes);
    secondsEl.innerHTML = addZero(seconds);
    periodEl.innerHTML = setTimePeriod(hour);
};
clock();

//Set the time period(AM/PM)
function setTimePeriod(time) {
    let ampm = "";
    if (time < 12) {
        ampm = "AM";
    } else {
        ampm = "PM";
    }
    return ampm;
}

//Set the 12-hour clock format
function period(time) {
    if (time > 12) {
        time = time - 12;
        return time;
    }
    return time;
}
//Add the 0 for the values lower than 10
function addZero(time) {
    if (time < 10) {
        time = "0" + time;
    }
    return time;
}

// Calendar functions
function setCalendarValue() {
    const today = new Date();
    yearsEl.innerHTML = today.getFullYear();
    dayNumbersEl.innerHTML = today.getDate();
    daysEl.innerHTML = days[today.getDay()];
    monthsEl.innerHTML = month[today.getMonth()];
}

// Events call
const updateTime = setInterval(clock, 1000);
setCalendarValue();
