import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';
import SearchBar from '../components/SearchBar';
import { useSearchQuery } from '../components/hooks/useSearchQuery';
import '@testing-library/jest-dom';

// Мокаем useRouter
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

// Мокаем useSearchQuery
jest.mock('../components/hooks/useSearchQuery', () => ({
  useSearchQuery: jest.fn(),
}));

const mockOnSearchChange = jest.fn();
const pushMock = jest.fn();

describe('SearchBar component', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.resetAllMocks();

    // Мокаем поведение useRouter
    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
      pathname: '/search',
    });

    // Мокаем useSearchQuery
    (useSearchQuery as jest.Mock).mockReturnValue({
      searchTerm: '',
      setSearchTerm: jest.fn(),
    });
  });

  test('clicking the Search button saves the entered value to local storage', () => {
    const setSearchTermMock = jest.fn();
    (useSearchQuery as jest.Mock).mockReturnValue({
      searchTerm: '',
      setSearchTerm: setSearchTermMock,
    });

    render(<SearchBar onSearchChange={mockOnSearchChange} />);

    const input = screen.getByPlaceholderText('Input search term');
    const button = screen.getByText('Search');

    fireEvent.change(input, { target: { value: 'Luke' } });
    fireEvent.click(button);

    expect(localStorage.getItem('searchTerm')).toBe('Luke');
    expect(setSearchTermMock).toHaveBeenCalledWith('Luke');
  });

  test('component retrieves the value from local storage upon mounting', () => {
    localStorage.setItem('searchTerm', 'Vader');

    render(<SearchBar onSearchChange={mockOnSearchChange} />);

    const input = screen.getByPlaceholderText(
      'Input search term'
    ) as HTMLInputElement;
    expect(input.value).toBe('Vader');
  });

  test('updates the query parameters when search term changes', () => {
    const setSearchTermMock = jest.fn();
    (useSearchQuery as jest.Mock).mockReturnValue({
      searchTerm: 'Yoda',
      setSearchTerm: setSearchTermMock,
    });

    render(<SearchBar onSearchChange={mockOnSearchChange} />);

    expect(pushMock).toHaveBeenCalledWith({
      pathname: '/search',
      query: { search: 'Yoda', page: '1' },
    });
  });
});
