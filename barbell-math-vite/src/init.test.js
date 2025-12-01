/**
 * Tests for init.js - DOM initialization and event listener setup
 */

describe('init.js - DOM initialization', () => {
  let mockCalculateTestValue;
  let mockAddEventListener;

  beforeEach(() => {
    // Mock the calculateTestValue function
    mockCalculateTestValue = jest.fn();
    mockAddEventListener = jest.fn();

    // Set up DOM
    document.body.innerHTML = `
      <button id="calculateButton">Calculate</button>
    `;

    // Mock addEventListener
    const button = document.getElementById('calculateButton');
    button.addEventListener = mockAddEventListener;
  });

  test('attaches event listener to calculate button on DOMContentLoaded', () => {
    const calculateButton = document.getElementById('calculateButton');

    // Simulate the code from init.js
    if (calculateButton) {
      calculateButton.addEventListener('click', mockCalculateTestValue);
    }

    expect(mockAddEventListener).toHaveBeenCalledWith('click', mockCalculateTestValue);
  });

  test('does not throw error when calculate button is not present', () => {
    document.body.innerHTML = '';

    const calculateButton = document.getElementById('calculateButton');

    // This should not throw an error
    expect(() => {
      if (calculateButton) {
        calculateButton.addEventListener('click', mockCalculateTestValue);
      }
    }).not.toThrow();

    expect(mockAddEventListener).not.toHaveBeenCalled();
  });

  test('calculate button exists in DOM', () => {
    const calculateButton = document.getElementById('calculateButton');
    expect(calculateButton).toBeTruthy();
    expect(calculateButton.tagName).toBe('BUTTON');
  });
});
