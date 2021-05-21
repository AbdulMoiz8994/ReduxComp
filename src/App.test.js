import { render,screen } from '@testing-library/react';
// import App from './App';
import {About} from './Test-Case/About'


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
test('testing of About Page',() =>{
  const checkingAbout=render(<About/>);
  const result=checkingAbout.getByText(/hello world/i)
  expect(result).toBeInTheDocument()
})


test('testing of input type',() =>{
 render(<About/>)
  const expecting=screen.getByTestId(/text/i)
  expect(expecting).toBeInTheDocument()
  expect(expecting).toHaveAttribute("type", "text")
})