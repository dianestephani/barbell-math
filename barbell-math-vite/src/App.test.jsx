import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });

  test('returns null as expected', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toBeNull();
  });
});
