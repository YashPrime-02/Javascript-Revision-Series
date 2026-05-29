const clock = document.getElementById('clock');
const dateElement = document.getElementById('date');
const ampm = document.getElementById('ampm');
const toggleBtn = document.getElementById('toggle-format');

const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');

let is24Hour = false;

toggleBtn.addEventListener('click', function(){

  is24Hour = !is24Hour;

  if(is24Hour){
    toggleBtn.innerHTML = 'Switch to 12 Hour Format';
    ampm.style.display = 'none';
  } else {
    toggleBtn.innerHTML = 'Switch to 24 Hour Format';
    ampm.style.display = 'inline';
  }

});

setInterval(function(){

  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  const amPmValue = hours >= 12 ? 'PM' : 'AM';

  ampm.innerHTML = amPmValue;

  if(!is24Hour){

    hours = hours % 12;

    if(hours === 0){
      hours = 12;
    }

  }

  hours = String(hours).padStart(2, '0');
  minutes = String(minutes).padStart(2, '0');
  seconds = String(seconds).padStart(2, '0');

  clock.innerHTML = `${hours}:${minutes}:${seconds}`;

  const options = {
    weekday:'long',
    year:'numeric',
    month:'long',
    day:'numeric'
  };

  dateElement.innerHTML = now.toLocaleDateString(undefined, options);

  const realHours = now.getHours();

  const hourRotation = 30 * realHours + minutes / 2;
  const minuteRotation = 6 * minutes;
  const secondRotation = 6 * seconds;

  hourHand.style.transform =
    `translateX(-50%) rotate(${hourRotation}deg)`;

  minuteHand.style.transform =
    `translateX(-50%) rotate(${minuteRotation}deg)`;

  secondHand.style.transform =
    `translateX(-50%) rotate(${secondRotation}deg)`;

}, 1000);
