import { calculateTestValue, calculateBumperPlates } from './barbellMath';

describe('calculateTestValue', () => {
  beforeEach(() => {
    // Set up DOM elements
    document.body.innerHTML = `
      <input id="exampleFormControlInput1" type="number" value="135" />
      <select class="form-select">
        <option value="1">15 lb Barbell</option>
        <option value="2">35 lb Barbell</option>
        <option value="3" selected>45 lb Barbell</option>
        <option value="4">58 lb Barbell</option>
        <option value="5">65 lb Barbell</option>
      </select>
      <input id="calculationTest" type="text" />
      <input id="weightPerSide" type="text" />
      <input id="weight-45" type="text" />
      <input id="weight-35" type="text" />
      <input id="weight-25" type="text" />
      <input id="weight-15" type="text" />
      <input id="weight-10" type="text" />
      <input id="weight-5" type="text" />
      <input id="weight-2-5" type="text" />
      <input id="weight-1-25" type="text" />
      <input type="checkbox" id="checkbox-45" checked />
      <input type="checkbox" id="checkbox-35" checked />
      <input type="checkbox" id="checkbox-25" checked />
      <input type="checkbox" id="checkbox-15" checked />
      <input type="checkbox" id="checkbox-10" checked />
      <input type="checkbox" id="checkbox-5" checked />
      <input type="checkbox" id="checkbox-2-5" checked />
      <input type="checkbox" id="checkbox-1-25" checked />
    `;
  });

  test('calculates correct difference for 135lb target with 45lb bar', () => {
    const targetWeightInput = document.getElementById('exampleFormControlInput1');
    targetWeightInput.value = '135';

    const calculationTestBox = document.getElementById('calculationTest');

    calculateTestValue();

    expect(calculationTestBox.value).toBe('90');
  });

  test('calculates correct difference for 225lb target with 45lb bar', () => {
    const targetWeightInput = document.getElementById('exampleFormControlInput1');
    targetWeightInput.value = '225';

    const calculationTestBox = document.getElementById('calculationTest');

    calculateTestValue();

    expect(calculationTestBox.value).toBe('180');
  });

  test('handles 15lb bar selection correctly', () => {
    const targetWeightInput = document.getElementById('exampleFormControlInput1');
    targetWeightInput.value = '65';

    const barWeightSelect = document.querySelector('.form-select');
    barWeightSelect.value = '1'; // 15lb bar

    const calculationTestBox = document.getElementById('calculationTest');

    calculateTestValue();

    expect(calculationTestBox.value).toBe('50');
  });

  test('handles 35lb bar selection correctly', () => {
    const targetWeightInput = document.getElementById('exampleFormControlInput1');
    targetWeightInput.value = '100';

    const barWeightSelect = document.querySelector('.form-select');
    barWeightSelect.value = '2'; // 35lb bar

    const calculationTestBox = document.getElementById('calculationTest');

    calculateTestValue();

    expect(calculationTestBox.value).toBe('65');
  });

  test('displays error message for invalid target weight', () => {
    const targetWeightInput = document.getElementById('exampleFormControlInput1');
    targetWeightInput.value = '';

    const calculationTestBox = document.getElementById('calculationTest');

    calculateTestValue();

    expect(calculationTestBox.value).toBe('Invalid target weight');
  });

  test('displays error message for non-numeric target weight', () => {
    const targetWeightInput = document.getElementById('exampleFormControlInput1');
    targetWeightInput.value = 'abc';

    const calculationTestBox = document.getElementById('calculationTest');

    calculateTestValue();

    expect(calculationTestBox.value).toBe('Invalid target weight');
  });

  test('handles decimal target weights', () => {
    const targetWeightInput = document.getElementById('exampleFormControlInput1');
    targetWeightInput.value = '137.5';

    const calculationTestBox = document.getElementById('calculationTest');

    calculateTestValue();

    expect(calculationTestBox.value).toBe('92.5');
  });

  test('handles zero target weight as invalid', () => {
    const targetWeightInput = document.getElementById('exampleFormControlInput1');
    targetWeightInput.value = '0';

    const calculationTestBox = document.getElementById('calculationTest');

    calculateTestValue();

    // Zero is falsy so it's treated as invalid
    expect(calculationTestBox.value).toBe('Invalid target weight');
  });
});

describe('calculateBumperPlates', () => {
  beforeEach(() => {
    // Set up DOM elements
    document.body.innerHTML = `
      <input id="calculationTest" type="text" value="90" />
      <input id="weightPerSide" type="text" />
      <input id="weight-45" type="text" />
      <input id="weight-35" type="text" />
      <input id="weight-25" type="text" />
      <input id="weight-15" type="text" />
      <input id="weight-10" type="text" />
      <input id="weight-5" type="text" />
      <input id="weight-2-5" type="text" />
      <input id="weight-1-25" type="text" />
      <input type="checkbox" id="checkbox-45" checked />
      <input type="checkbox" id="checkbox-35" checked />
      <input type="checkbox" id="checkbox-25" checked />
      <input type="checkbox" id="checkbox-15" checked />
      <input type="checkbox" id="checkbox-10" checked />
      <input type="checkbox" id="checkbox-5" checked />
      <input type="checkbox" id="checkbox-2-5" checked />
      <input type="checkbox" id="checkbox-1-25" checked />
    `;
  });

  test('calculates 90lbs correctly (45lbs per side = 1x45)', () => {
    const calculationTestBox = document.getElementById('calculationTest');
    calculationTestBox.value = '90';

    calculateBumperPlates();

    expect(document.getElementById('weightPerSide').value).toBe('45');
    expect(document.getElementById('weight-45').value).toBe('1');
    expect(document.getElementById('weight-35').value).toBe('0');
    expect(document.getElementById('weight-25').value).toBe('0');
  });

  test('calculates 180lbs correctly (90lbs per side = 2x45)', () => {
    const calculationTestBox = document.getElementById('calculationTest');
    calculationTestBox.value = '180';

    calculateBumperPlates();

    expect(document.getElementById('weightPerSide').value).toBe('90');
    expect(document.getElementById('weight-45').value).toBe('2');
    expect(document.getElementById('weight-35').value).toBe('0');
  });

  test('calculates 100lbs correctly (50lbs per side = 1x45 + 1x5)', () => {
    const calculationTestBox = document.getElementById('calculationTest');
    calculationTestBox.value = '100';

    calculateBumperPlates();

    expect(document.getElementById('weightPerSide').value).toBe('50');
    expect(document.getElementById('weight-45').value).toBe('1');
    expect(document.getElementById('weight-5').value).toBe('1');
  });

  test('calculates 140lbs correctly (70lbs per side = 1x45 + 1x25)', () => {
    const calculationTestBox = document.getElementById('calculationTest');
    calculationTestBox.value = '140';

    calculateBumperPlates();

    expect(document.getElementById('weightPerSide').value).toBe('70');
    expect(document.getElementById('weight-45').value).toBe('1');
    expect(document.getElementById('weight-25').value).toBe('1');
  });

  test('calculates complex combination (117.5lbs per side)', () => {
    const calculationTestBox = document.getElementById('calculationTest');
    calculationTestBox.value = '235';

    calculateBumperPlates();

    expect(document.getElementById('weightPerSide').value).toBe('117.5');
    expect(document.getElementById('weight-45').value).toBe('2');
    expect(document.getElementById('weight-25').value).toBe('1');
    expect(document.getElementById('weight-2-5').value).toBe('1');
  });

  test('handles decimal weights correctly', () => {
    const calculationTestBox = document.getElementById('calculationTest');
    calculationTestBox.value = '92.5';

    calculateBumperPlates();

    expect(document.getElementById('weightPerSide').value).toBe('46.25');
    expect(document.getElementById('weight-45').value).toBe('1');
    expect(document.getElementById('weight-1-25').value).toBe('1');
  });

  test('clears table for invalid input', () => {
    const calculationTestBox = document.getElementById('calculationTest');
    calculationTestBox.value = '';

    calculateBumperPlates();

    expect(document.getElementById('weight-45').value).toBe('');
    expect(document.getElementById('weight-35').value).toBe('');
    expect(document.getElementById('weightPerSide').value).toBe('');
  });

  test('clears table for non-numeric input', () => {
    const calculationTestBox = document.getElementById('calculationTest');
    calculationTestBox.value = 'invalid';

    calculateBumperPlates();

    expect(document.getElementById('weight-45').value).toBe('');
    expect(document.getElementById('weightPerSide').value).toBe('');
  });

  test('respects plate selection checkboxes (only 45lb plates)', () => {
    const calculationTestBox = document.getElementById('calculationTest');
    calculationTestBox.value = '90';

    // Uncheck all plates except 45lb
    document.getElementById('checkbox-35').checked = false;
    document.getElementById('checkbox-25').checked = false;
    document.getElementById('checkbox-15').checked = false;
    document.getElementById('checkbox-10').checked = false;
    document.getElementById('checkbox-5').checked = false;
    document.getElementById('checkbox-2-5').checked = false;
    document.getElementById('checkbox-1-25').checked = false;

    calculateBumperPlates();

    expect(document.getElementById('weight-45').value).toBe('1');
    expect(document.getElementById('weight-35').value).toBe('0');
  });

  test('calculates with limited plate selection (no 45lb plates)', () => {
    const calculationTestBox = document.getElementById('calculationTest');
    calculationTestBox.value = '70';

    // Uncheck 45lb plates
    document.getElementById('checkbox-45').checked = false;

    calculateBumperPlates();

    expect(document.getElementById('weight-45').value).toBe('0');
    expect(document.getElementById('weight-35').value).toBe('1');
    expect(document.getElementById('weightPerSide').value).toBe('35');
  });

  test('handles zero weight as invalid', () => {
    const calculationTestBox = document.getElementById('calculationTest');
    calculationTestBox.value = '0';

    calculateBumperPlates();

    // Zero is falsy so table is cleared
    expect(document.getElementById('weightPerSide').value).toBe('');
    expect(document.getElementById('weight-45').value).toBe('');
  });

  test('handles odd weight distribution using greedy algorithm', () => {
    const calculationTestBox = document.getElementById('calculationTest');
    calculationTestBox.value = '315'; // 157.5 per side

    calculateBumperPlates();

    expect(document.getElementById('weightPerSide').value).toBe('157.5');
    // Greedy algorithm: 3x45 = 135, leaving 22.5
    expect(document.getElementById('weight-45').value).toBe('3');
    // 22.5 / 15 = 1, leaving 7.5
    expect(document.getElementById('weight-15').value).toBe('1');
    // 7.5 / 5 = 1, leaving 2.5
    expect(document.getElementById('weight-5').value).toBe('1');
    // 2.5 / 2.5 = 1
    expect(document.getElementById('weight-2-5').value).toBe('1');
  });
});
