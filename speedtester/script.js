document.addEventListener('DOMContentLoaded', function() {
    const typingInput = document.getElementById('typingInput');
    const timerDisplay = document.getElementById('timer');
    const charCountDisplay = document.getElementById('charCount');
    const pauseBtn = document.getElementById('pauseBtn');
    const resetBtn = document.getElementById('resetBtn');
    
    let startTime;
    let timerInterval;
    let isPaused = false;
    let charCount = 0;
  
    // Function to start the timer
    function startTimer() {
      startTime = Date.now() - (timerInterval ? timerInterval : 0);
      timerInterval = setInterval(updateTimer, 1000);
    }
  
    // Function to pause the timer
    function pauseTimer() {
      clearInterval(timerInterval);
      isPaused = true;
    }
  
    // Function to reset the timer and input field
    function resetTest() {
      clearInterval(timerInterval);
      typingInput.value = '';
      timerDisplay.textContent = '00:00:00';
      charCount = 0;
      charCountDisplay.textContent = 'Characters: 0';
      isPaused = false;
    }
  
    // Function to update the timer display
    function updateTimer() {
      const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
      const hours = Math.floor(elapsedTime / 3600);
      const minutes = Math.floor((elapsedTime % 3600) / 60);
      const seconds = elapsedTime % 60;
      timerDisplay.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }
  
    // Function to update character count and measure typing speed
    function updateCharCount() {
      charCount = typingInput.value.length;
      charCountDisplay.textContent = `Characters: ${charCount}`;
    }
  
    // Helper function to pad single digit numbers with leading zero
    function pad(num) {
      return num.toString().padStart(2, '0');
    }
  
    // Event listeners
    typingInput.addEventListener('input', function() {
      if (!startTime) {
        startTimer();
      }
      updateCharCount();
    });
  
    pauseBtn.addEventListener('click', function() {
      if (!isPaused) {
        pauseTimer();
      } else {
        startTimer();
      }
    });
  
    resetBtn.addEventListener('click', function() {
      resetTest();
    });
  });
  