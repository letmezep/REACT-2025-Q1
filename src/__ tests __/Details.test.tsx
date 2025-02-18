import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes, useNavigate } from 'react-router';
import { useParams } from 'react-router';
import '@testing-library/jest-dom';
import Details from '../components/layout/Details';
import { useGetCharacterByIdQuery } from '../services/api/starWarsApi';

jest.mock('../services/api/starWarsApi', () => ({
  useGetCharacterByIdQuery: jest.fn(),
}));

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useParams: jest.fn(),
  useNavigate: jest.fn(),
}));

describe('Details component', () => {
  beforeEach(() => {
    (useParams as jest.Mock).mockReturnValue({ id: '1' });
  });

  test('displays loading indicator while fetching data', async () => {
    (useGetCharacterByIdQuery as jest.Mock).mockReturnValue({
      data: undefined,
      isLoading: true,
      error: undefined,
    });

    render(
      <MemoryRouter>
        <Details />
      </MemoryRouter>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders detailed character data', async () => {
    (useGetCharacterByIdQuery as jest.Mock).mockReturnValue({
      data: {
        name: 'Character 1',
        height: '180',
        mass: '75',
        skin_color: 'fair',
        birth_year: '1990',
      },
      isLoading: false,
      error: undefined,
    });

    render(
      <MemoryRouter>
        <Details />
      </MemoryRouter>
    );

    expect(await screen.findByText('Character 1')).toBeInTheDocument();
    expect(screen.getByText('Height: 180')).toBeInTheDocument();
    expect(screen.getByText('Mass: 75')).toBeInTheDocument();
    expect(screen.getByText('Skin Color: fair')).toBeInTheDocument();
    expect(screen.getByText('Birth Year: 1990')).toBeInTheDocument();
  });

  test('shows error message when API request fails', async () => {
    (useGetCharacterByIdQuery as jest.Mock).mockReturnValue({
      data: undefined,
      isLoading: false,
      error: true,
    });

    render(
      <MemoryRouter>
        <Details />
      </MemoryRouter>
    );

    expect(
      screen.getByText('Error fetching character data.')
    ).toBeInTheDocument();
  });

  test('clicking close button navigates back to main page', async () => {
    const mockNavigate = jest.fn();
    (useGetCharacterByIdQuery as jest.Mock).mockReturnValue({
      data: {
        name: 'Character 1',
        height: '180',
        mass: '75',
        skin_color: 'fair',
        birth_year: '1990',
      },
      isLoading: false,
      error: undefined,
    });
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    render(
      <MemoryRouter initialEntries={['/details/1?page=2']}>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </MemoryRouter>
    );

    expect(await screen.findByText('Character 1')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Close X'));

    expect(mockNavigate).toHaveBeenCalledWith('/?page=2');
  });
});
