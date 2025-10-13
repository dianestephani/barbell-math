// Initialize barbell math functionality
import 'bootstrap/dist/css/bootstrap.min.css';
import { calculateTestValue } from './barbellMath.js';

// Wait for DOM to be ready, then attach event listener
document.addEventListener('DOMContentLoaded', () => {
  const calculateButton = document.getElementById('calculateButton');
  if (calculateButton) {
    calculateButton.addEventListener('click', calculateTestValue);
  }
});
