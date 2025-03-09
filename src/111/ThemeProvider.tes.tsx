// import '@testing-library/jest-dom';
// import { render, screen, fireEvent } from '@testing-library/react';
// import { ThemeContext } from '../../components/context/ThemeContext';
// import { ThemeProvider } from '../../components/context/ThemeProvider';
// import { useContext } from 'react';

// const TestComponent = () => {
//   const { theme, changeTheme } = useContext(ThemeContext);
//   return (
//     <div>
//       <span data-testid="theme-value">{theme}</span>
//       <button onClick={changeTheme}>Toggle Theme</button>
//     </div>
//   );
// };

// describe('ThemeProvider', () => {
//   test('renders with default light theme', () => {
//     render(
//       <ThemeProvider>
//         <TestComponent />
//       </ThemeProvider>
//     );

//     expect(screen.getByTestId('theme-value')).toHaveTextContent('light');
//   });

//   test('toggles theme when button is clicked', () => {
//     render(
//       <ThemeProvider>
//         <TestComponent />
//       </ThemeProvider>
//     );

//     const button = screen.getByText('Toggle Theme');

//     fireEvent.click(button);
//     expect(screen.getByTestId('theme-value')).toHaveTextContent('dark');

//     fireEvent.click(button);
//     expect(screen.getByTestId('theme-value')).toHaveTextContent('light');
//   });

//   test('applies correct class to document element', () => {
//     render(
//       <ThemeProvider>
//         <TestComponent />
//       </ThemeProvider>
//     );

//     expect(document.documentElement.classList.contains('dark-mode')).toBe(
//       false
//     );

//     const button = screen.getByText('Toggle Theme');

//     fireEvent.click(button);
//     expect(document.documentElement.classList.contains('dark-mode')).toBe(true);

//     fireEvent.click(button);
//     expect(document.documentElement.classList.contains('dark-mode')).toBe(
//       false
//     );
//   });
// });
