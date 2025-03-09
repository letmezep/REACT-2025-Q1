import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { useRouter } from 'next/router';
import { toggleSelection } from '../components/store/slices/selectedItemsSlice';
import Card from '../components/Card';
import '@testing-library/jest-dom';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const mockStore = configureStore([]);

describe('Card Component', () => {
  let store: ReturnType<typeof mockStore>;
  const mockPush = jest.fn();

  beforeEach(() => {
    store = mockStore({
      starWarsApi: { queries: {}, mutations: {} }, 
      selectedCharacters: { selected: { '1': false } },
    });
    store.dispatch = jest.fn();

    (useRouter as jest.Mock).mockReturnValue({
      pathname: '/characters',
      query: {},
      push: mockPush,
    });
  });

  const renderWithProviders = (component: JSX.Element) => {
    return render(<Provider store={store}>{component}</Provider>);
  };

  const mockItem = {
    name: 'Luke Skywalker',
    url: 'https://swapi.dev/api/people/1/',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: [
      "https://swapi.dev/api/films/1/"
  ],
    species: [],
    vehicles: [
      "https://swapi.dev/api/vehicles/14/", 
      "https://swapi.dev/api/vehicles/30/"
  ],
  starships: [
        "https://swapi.dev/api/starships/12/", 
        "https://swapi.dev/api/starships/22/"
    ], 
    created: "2014-12-09T13:50:51.644000Z", 
    edited: "2014-12-20T21:17:56.891000Z",
  };

  test('renders character name', () => {
    renderWithProviders(<Card item={mockItem} />);
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
  });

  test('navigates on card click', () => {
    renderWithProviders(<Card item={mockItem} />);
    fireEvent.click(screen.getByRole('article'));
    expect(mockPush).toHaveBeenCalledWith(
      {
        pathname: '/characters',
        query: { id: '1' },
      },
      undefined,
      { shallow: true }
    );
  });

  test('toggles selection on checkbox click', () => {
    renderWithProviders(<Card item={mockItem} />);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(store.dispatch).toHaveBeenCalledWith(toggleSelection('1'));
  });
});
