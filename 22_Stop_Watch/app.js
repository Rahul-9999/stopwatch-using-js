let count = 0;
let interval = 0;
let minutes = 0;
let seconds = 0;
let milliSeconds = 0;



// start Timer
let startTimer = () => {
    count++;
    minutes = Math.floor((count/100)/60);
    seconds = Math.floor((count/100) - (minutes * 60));
    milliSeconds = Math.floor(count - (seconds * 100) - (minutes * 6000));

    document.querySelector('#minutes').innerText = leadingZero(minutes);
    document.querySelector('#seconds').innerText = leadingZero(seconds);
    document.querySelector('#m-seconds').innerText = leadingZero(milliSeconds);
};

// stop timer
let stopTimer = () => {
    clearInterval(interval);
};

// click on start button
document.querySelector('#start').addEventListener('click',function () {
    interval = setInterval(startTimer,10);
});

// click on stop button
document.querySelector('#stop').addEventListener('click',function () {
    stopTimer();
});

// click on reset button
document.querySelector('#reset').addEventListener('click',function () {
    stopTimer();
    count = 0;
    interval = 0;
    document.querySelector('#minutes').innerText = '00';
    document.querySelector('#seconds').innerText = '00';
    document.querySelector('#m-seconds').innerText = '00';
});

let leadingZero = (time) => {
    if(time <= 9){
        return '0' + time;
    }
    else{
        return  time;
    }
};
