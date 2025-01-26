import { render, screen, fireEvent } from '@testing-library/react';
import Signup from '../components/Account/Signup';
import { MemoryRouter } from 'react-router-dom';

test('renders Signup component', () => {
  render(
    <MemoryRouter>
      <Signup />
    </MemoryRouter>
  );

  expect(screen.getByText(/Please Sign Up/i)).toBeInTheDocument();
});

test('submits signup form', async () => {
  render(
    <MemoryRouter>
      <Signup />
    </MemoryRouter>
  );

  fireEvent.change(screen.getByLabelText(/Username/i), {
    target: { value: 'testuser' },
  });
  fireEvent.change(screen.getByLabelText(/Email/i), {
    target: { value: 'test@example.com' },
  });
  fireEvent.change(screen.getByLabelText(/Number/i), {
    target: { value: '1234567890' },
  });
  fireEvent.change(screen.getByLabelText(/Password/i), {
    target: { value: 'password' },
  });

  fireEvent.click(screen.getByText(/Submit/i));
  expect(screen.getByText(/Please Sign Up/i)).toBeInTheDocument();
});
