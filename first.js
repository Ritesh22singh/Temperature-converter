const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert() {
  if (toFahrenheit.checked) {
    temp = Number(textBox.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(1) + "°F";
  } else if (toCelsius.checked) {
    temp = Number(textBox.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp.toFixed(1) + "°C";
  } else {
    result.textContent = `Please select a Unit`;
  }
}

// User enters a temperature value in the textBox.
// User selects one of the radio buttons (toFahrenheit or toCelsius).
// User clicks the "Submit" button, triggering the convert function.
// The function:
// Reads the input value.
// Checks which conversion option is selected.
// Converts the temperature using the appropriate formula.
// Displays the result in the result element.
// If no option is selected, the user is prompted to choose a unit.
