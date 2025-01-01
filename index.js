let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

// Home Score
function incrementHomeOne(){
  homeScore.textContent = parseInt(homeScore.textContent) + 1;
  console.log("one was added");
}

function incrementHomeTwo(){
  homeScore.textContent = parseInt(homeScore.textContent) + 2;
  console.log("two was added");
}

function incrementHomeThree(){
  homeScore.textContent = parseInt(homeScore.textContent) + 3;
  console.log("three was added");
}


// Guest Score
function incrementGuestOne(){
  guestScore.textContent = parseInt(guestScore.textContent) + 1;
  console.log("one was added");
}

function incrementGuestTwo(){
  guestScore.textContent = parseInt(guestScore.textContent) + 2;
  console.log("two was added");
}

function incrementGuestThree(){
  guestScore.textContent = parseInt(guestScore.textContent) + 3;
  console.log("three was added");
}

// Select the timer element
const timerElement = document.getElementById('timer');

// Set initial time: 60 minutes
let timeRemaining = 60 * 60; // 60 minutes in seconds

// Function to format time as MM:SS
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Update the timer display
function updateTimer() {
  timerElement.textContent = formatTime(timeRemaining);
}

// Countdown function
function startCountdown() {
  const interval = setInterval(() => {
    if (timeRemaining > 0) {
      timeRemaining--; // Decrease time
      updateTimer();
    } else {
      clearInterval(interval); // Stop timer when it reaches 0
      alert('Time is up!');
    }
  }, 1000); // Execute every second
}

// Initialize the timer display and start countdown
updateTimer();
startCountdown();

