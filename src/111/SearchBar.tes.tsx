// import { render, screen, fireEvent } from '@testing-library/react';
// import { MemoryRouter } from 'react-router';
// import SearchBar from '../components/widgets/SearchBar';

// const mockOnSearchChange = jest.fn();

// const renderWithRouter = (ui: React.ReactElement) => {
//   return render(<MemoryRouter>{ui}</MemoryRouter>);
// };

// describe('SearchBar component', () => {
//   beforeEach(() => {
//     localStorage.removeItem('searchTerm');
//     jest.resetAllMocks();
//   });

//   test('clicking the Search button saves the entered value to local storage', () => {
//     renderWithRouter(<SearchBar onSearchChange={mockOnSearchChange} />);

//     const input = screen.getByPlaceholderText('Input search term');
//     const button = screen.getByText('Search');

//     fireEvent.change(input, { target: { value: 'Luke' } });
//     fireEvent.click(button);

//     expect(localStorage.getItem('searchTerm')).toBe('Luke');
//   });

//   test('component retrieves the value from local storage upon mounting', () => {
//     localStorage.setItem('searchTerm', 'Vader');

//     renderWithRouter(<SearchBar onSearchChange={mockOnSearchChange} />);

//     const input = screen.getByPlaceholderText(
//       'Input search term'
//     ) as HTMLInputElement;
//     expect(input.value).toBe('Vader');
//   });
// });
