import { render, screen, fireEvent } from '@testing-library/react';
import Account from '../components/Account/Account';
import { MemoryRouter } from 'react-router-dom';

test('renders Account component', () => {
  render(
    <MemoryRouter>
      <Account />
    </MemoryRouter>
  );

  expect(screen.getByText(/Please Sign In/i)).toBeInTheDocument();
});

test('submits login form', async () => {
  render(
    <MemoryRouter>
      <Account />
    </MemoryRouter>
  );

  fireEvent.change(screen.getByLabelText(/Username/i), {
    target: { value: 'testuser' },
  });
  fireEvent.change(screen.getByLabelText(/Password/i), {
    target: { value: 'password' },
  });

  fireEvent.click(screen.getByText(/Submit/i));
  expect(screen.getByText(/Please Sign In/i)).toBeInTheDocument();
});
