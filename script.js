let score = 0;
let level = 1;
let colorOptions = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F'];
let bottleStatus = [null, null, null, null]; // Track the color of each bottle

// Start a new level
function startNewLevel() {
  level++;
  document.getElementById('level-display').innerText = `Level: ${level}`;
  resetBottles();
  score = 0;
  document.getElementById('score-display').innerText = `Score: ${score}`;
}

// Fill bottle with color
function fillBottle(bottleId) {
  if (bottleStatus[bottleId - 1] === null) {
    let color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
    document.getElementById(`bottle${bottleId}`).style.backgroundColor = color;
    bottleStatus[bottleId - 1] = color;

    score += 10;
    document.getElementById('score-display').innerText = `Score: ${score}`;

    if (bottleStatus.every(bottle => bottle !== null)) {
      // All bottles filled
      setTimeout(startNewLevel, 1000);  // Start new level after 1 second
    }
  }
}

// Reset bottles to empty state
function resetBottles() {
  bottleStatus = [null, null, null, null];
  for (let i = 1; i <= 4; i++) {
    document.getElementById(`bottle${i}`).style.backgroundColor = '#ddd';
  }
}

// External link redirection every 15 seconds
setInterval(() => {
  window.open('https://www.example.com', '_blank');
}, 15000);
