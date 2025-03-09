// import { render, screen, fireEvent } from '@testing-library/react';
// import ErrorButton from '../../components/common/ErrorButton';
// import '@testing-library/jest-dom';

// describe('ErrorButton component', () => {
//   test('renders without crashing', () => {
//     render(<ErrorButton />);
//     expect(screen.getByText('Click for Test Error')).toBeInTheDocument();
//   });

//   test('throws an error when clicked', () => {
//     jest.spyOn(console, 'error').mockImplementation(() => {});

//     render(<ErrorButton />);
//     const button = screen.getByText('Click for Test Error');

//     expect(() => fireEvent.click(button)).toThrow('Testing error');

//     jest.restoreAllMocks();
//   });
// });
