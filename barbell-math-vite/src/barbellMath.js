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

  // Call calculateBumperPlates to populate the table
  calculateBumperPlates();
}

/**
 * Calculates the optimal distribution of bumper plates needed
 * and populates the table with quantities
 */
export function calculateBumperPlates() {
  // Get the value from the calculation test box
  const calculationTestBox = document.getElementById('calculationTest');
  let remainingWeight = parseFloat(calculationTestBox.value);

  // Validate input
  if (!remainingWeight || isNaN(remainingWeight)) {
    clearBumperPlateTable();
    return;
  }

  // Since weight is distributed on both sides of the bar, divide by 2
  remainingWeight = remainingWeight / 2;

  // Available plate weights in descending order (optimal greedy approach)
  const plateWeights = [45, 35, 25, 15, 10, 5, 2.5, 1.25];

  // Calculate quantities for each plate
  const plateQuantities = {};

  for (const plateWeight of plateWeights) {
    const quantity = Math.floor(remainingWeight / plateWeight);
    plateQuantities[plateWeight] = quantity;
    remainingWeight -= quantity * plateWeight;
    // Round to avoid floating point precision issues
    remainingWeight = Math.round(remainingWeight * 100) / 100;
  }

  // Populate the table with the calculated quantities
  document.getElementById('weight-45').value = plateQuantities[45] || 0;
  document.getElementById('weight-35').value = plateQuantities[35] || 0;
  document.getElementById('weight-25').value = plateQuantities[25] || 0;
  document.getElementById('weight-15').value = plateQuantities[15] || 0;
  document.getElementById('weight-10').value = plateQuantities[10] || 0;
  document.getElementById('weight-5').value = plateQuantities[5] || 0;
  document.getElementById('weight-2-5').value = plateQuantities[2.5] || 0;
  document.getElementById('weight-1-25').value = plateQuantities[1.25] || 0;
}

/**
 * Clears all values in the bumper plate table
 */
function clearBumperPlateTable() {
  document.getElementById('weight-45').value = '';
  document.getElementById('weight-35').value = '';
  document.getElementById('weight-25').value = '';
  document.getElementById('weight-15').value = '';
  document.getElementById('weight-10').value = '';
  document.getElementById('weight-5').value = '';
  document.getElementById('weight-2-5').value = '';
  document.getElementById('weight-1-25').value = '';
}
