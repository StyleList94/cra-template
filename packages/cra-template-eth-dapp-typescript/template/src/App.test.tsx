import { render, screen } from '@testing-library/react';
import App from './App';

test('render', () => {
  render(<App />);
  expect(screen.getByText(/Create React Ethereum DApp/i)).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: 'Connect on Metamask' })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: 'Connect on Portis' })
  ).toBeInTheDocument();
});
