// Get the new year 
const getNewYear = () => {
      const currentYear = new Date().getFullYear();
      return new Date(`January 01 ${currentYear + 1} 00:00:00`);
};

// update the year element
const year = document.querySelector('.year');
year.innerHTML = getNewYear().getFullYear();

// select elements
const app = document.querySelector('.countdown-timer');
const message = document.querySelector('.message');
const heading = document.querySelector('h1');



const render = (time) => {
      app.innerHTML = `
        <div class="count-down">
            <div class="timer">
                <h2 class="days">${time.days}</h2>
                <small>Days</small>
            </div>
            <div class="timer">
                <h2 class="hours">${time.hours}</h2>
                <small>Hours</small>
            </div>
            <div class="timer">
                <h2 class="minutes">${time.minutes}</h2>
                <small>Minutes</small>
            </div>
            <div class="timer">
                <h2 class="seconds">${time.seconds}</h2>
                <small>Seconds</small>
            </div>
        </div>
        `;
};


const showMessage = () => {
      message.innerHTML = `Happy New Year ${newYear}!`;
      app.innerHTML = '';
      heading.style.display = 'none';
};

const hideMessage = () => {
      message.innerHTML = '';
      heading.style.display = 'block';
};

const complete = () => {
      showMessage();

      // restart the countdown after showing the 
      // greeting message for a day ()
      setTimeout(() => {
            hideMessage();
            countdownTimer.setExpiredDate(getNewYear());
      }, 1000 * 60 * 60 * 24);
};

const countdownTimer = new CountDown(
      getNewYear(),
      render,
      complete
);