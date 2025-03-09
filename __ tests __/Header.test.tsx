import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/layout/Header';
import SearchBar from '../components/widgets/SearchBar';

jest.mock('../components/widgets/SearchBar', () =>
  jest.fn(() => <div data-testid="search-bar" />)
);

describe('Header component', () => {
  test('renders SearchBar component', () => {
    const mockOnSearchChange = jest.fn();

    render(<Header onSearchChange={mockOnSearchChange} />);

    expect(screen.getByTestId('search-bar')).toBeInTheDocument();
  });

  test('passes onSearchChange prop to SearchBar', async () => {
    const mockOnSearchChange = jest.fn();

    render(<Header onSearchChange={mockOnSearchChange} />);

    expect(SearchBar).toHaveBeenCalledWith(
      { onSearchChange: mockOnSearchChange },
      {}
    );
  });
});
