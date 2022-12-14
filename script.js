const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const year = document.getElementById("year");
const loading = document.getElementById("loading");

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Set Year
year.innerText = currentYear + 1;

// Updating countdown time
function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime; //getting time for the entire 365days

  // Calculating time in hours minutes and seconds
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24; //getting the difference
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Adding values to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}

// Showing spinner before countdown
setTimeout(() => {
  loading.remove();
  countdown.style.display = "flex";
}, 1000);

// Running second
setInterval(updateCountdown, 1000);
