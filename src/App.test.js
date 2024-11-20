import { render, screen,logRoles } from '@testing-library/react';
import App from './App';

test.skip('example test one', () => {
  render(<App />);
  const btn = screen.getByRole('button',{name:'Click here', exact:false});
  expect(btn).toBeInTheDocument();
});


