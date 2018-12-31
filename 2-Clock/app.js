const secondHand = document.querySelector(".second");
const minuteHand = document.querySelector(".minute");
const hourHand = document.querySelector(".hour");

function setTime() {
  const now = new Date();
  console.log(now.getMinutes());

  const seconds = now.getSeconds();
  const seconds_degrees = seconds * 6;
  secondHand.style.transform = `rotate(${seconds_degrees}deg)`;

  const minutes = now.getMinutes();
  const minutes_degrees = minutes * 6;
  minuteHand.style.transform = `rotate(${minutes_degrees}deg)`;

  const hours = now.getHours();
  const hours_degrees = hours * 30;
  hourHand.style.transform = `rotate(${hours_degrees}deg)`;
}

setInterval(setTime, 1000);

setTime();