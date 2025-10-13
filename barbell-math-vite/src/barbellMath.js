// Barbell Math Functions

// Map of bar weight option values to actual weights
const barWeightMap = {
  "1": 15,
  "2": 35,
  "3": 45,
  "4": 58,
  "5": 65
};

/**
 * Calculates the test value by subtracting bar weight from target weight
 * and displays the result in the calculation test box
 */
export function calculateTestValue() {
  // Get the target weight input value
  const targetWeightInput = document.getElementById('exampleFormControlInput1');
  const targetWeight = parseFloat(targetWeightInput.value);

  // Get the selected bar weight
  const barWeightSelect = document.querySelector('.form-select');
  const selectedValue = barWeightSelect.value;
  const barWeight = barWeightMap[selectedValue];

  // Get the calculation test box
  const calculationTestBox = document.getElementById('calculationTest');

  // Validate inputs
  if (!targetWeight || isNaN(targetWeight)) {
    calculationTestBox.value = 'Invalid target weight';
    return;
  }

  if (!barWeight) {
    calculationTestBox.value = 'Please select bar weight';
    return;
  }

  // Calculate the difference
  const difference = targetWeight - barWeight;

  // Display the result
  calculationTestBox.value = difference;
}
