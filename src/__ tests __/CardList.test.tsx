import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CardList from '../components/widgets/CardList';
import { fetchData } from '../services/api/fetchData';
import { getFilteredData } from '../services/filterData';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom';
import { mockData } from './mocks/fetchDataMock';

jest.mock('../services/api/fetchData', () => ({
  fetchData: jest.fn(),
}));

jest.mock('../services/filterData');

describe('Component CardList', () => {
  beforeEach(() => {
    (fetchData as jest.Mock).mockResolvedValue({
      results: mockData,
      next: null,
      previous: null,
    });

    (getFilteredData as jest.Mock).mockReturnValue(mockData);
  });

  test('verify cards number', async () => {
    render(
      <MemoryRouter>
        <CardList />
      </MemoryRouter>
    );

    await waitFor(() => screen.getByText('Page 1 of 2'));

    const cards = screen.getAllByRole('article');
    expect(cards).toHaveLength(10);

    fireEvent.click(screen.getByText('Next'));
    await waitFor(() => screen.getByText('Page 2 of 2'));
  });

  test('display no characters found', async () => {
    (fetchData as jest.Mock).mockResolvedValue({
      results: [],
      next: null,
      previous: null,
    });

    (getFilteredData as jest.Mock).mockReturnValue(null);

    render(
      <MemoryRouter>
        <CardList />
      </MemoryRouter>
    );

    await waitFor(() => screen.getByText('No characters found'));
    expect(screen.getByText('No characters found')).toBeInTheDocument();
  });
});
