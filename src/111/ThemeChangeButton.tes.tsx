// import { render, screen, fireEvent } from '@testing-library/react';
// import ThemeChangeButton from '../../components/ui/ThemeChangeButton';
// import { ThemeContext } from '../../components/context/ThemeContext';

// describe('ThemeChangeButton', () => {
//   test('calls changeTheme function on click', () => {
//     const mockChangeTheme = jest.fn();

//     const mockContextValue = {
//       theme: 'light',
//       changeTheme: mockChangeTheme,
//     };

//     render(
//       <ThemeContext.Provider value={mockContextValue}>
//         <ThemeChangeButton />
//       </ThemeContext.Provider>
//     );

//     const button = screen.getByRole('button', { name: /change theme/i });
//     fireEvent.click(button);

//     expect(mockChangeTheme).toHaveBeenCalledTimes(1);
//   });
// });
