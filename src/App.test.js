import { render, screen, fireEvent } from'@testing-library/react'
import App from './App';
import '@testing-library/jest-dom/extend-expect';
import TodoTable from'./TodoTable';

/*test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/


test('renders todotable', () => {
  const row = [
    {desc: 'Go to coffee', date: '24.01.2021'}
  ];
  render(<TodoTable todos={row} />);
  const tablecell = screen.getByText(/go to coffee/i);
    expect(tablecell).toBeInTheDocument();
});

test('add todo',() => {
  render(<App />);
  const desc = screen.getByPlaceholderText('Description');
  fireEvent.change(desc, { target: { value: 'Go to coffee' } });
  const date = screen.getByPlaceholderText('Date');
  fireEvent.change(date, { target: { value: '29.01.2021' } })

  const button = screen.getByText('Add');
  fireEvent.click(button);

  const tablecell = screen.getByText(/go to coffee/i);
  expect(tablecell).toBeInTheDocument();
})
