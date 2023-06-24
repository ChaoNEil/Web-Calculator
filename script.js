// Get the display element
const display = document.getElementById('result');

// Add click event listener to buttons
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
  button.addEventListener('click', function() {
    const buttonText = this.innerHTML;

    if (buttonText === '=') {
      try {
        // Evaluate the expression using Math.js and update the display
        display.value = math.evaluate(display.value);
      } catch (error) {
        display.value = 'Error';
      }
    } else if (buttonText === 'Clear') {
      // Clear the display
      display.value = '';
    } else if (buttonText === 'Delete') {
      // Delete the last character from the display
      display.value = display.value.slice(0, -1);
    } else {
      // Append the clicked button's value to the display
      display.value += buttonText;
    }
  });
});