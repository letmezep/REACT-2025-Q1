import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';
import Flyout from '../components/widgets/Flyout';
import { unselectAll } from '../store/slices/selectedItemsSlice';
import { exportToCSV } from '../utils/exportToCSV';
import { useGetCharactersQuery } from '../services/api/starWarsApi';

jest.mock('../services/api/starWarsApi', () => ({
  useGetCharactersQuery: jest.fn(),
}));

jest.mock('../utils/exportToCSV', () => ({
  exportToCSV: jest.fn(),
}));

const mockStore = configureStore([]);

describe('Flyout component', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({
      selectedCharacters: {
        selected: { '1': true, '2': true },
      },
    });
    store.dispatch = jest.fn();

    (useGetCharactersQuery as jest.Mock).mockReturnValue({
      data: {
        results: [
          { name: 'Character 1', url: 'https://swapi.dev/api/people/1/' },
          { name: 'Character 2', url: 'https://swapi.dev/api/people/2/' },
        ],
      },
    });
  });

  const renderWithProviders = () =>
    render(
      <Provider store={store}>
        <Flyout />
      </Provider>
    );

  test('renders the selected items count', () => {
    renderWithProviders();

    expect(screen.getByText('2 items are selected')).toBeInTheDocument();
  });

  test('calls unselectAll when "Unselect all" button is clicked', () => {
    renderWithProviders();

    const button = screen.getByText('Unselect all');
    fireEvent.click(button);

    expect(store.dispatch).toHaveBeenCalledWith(unselectAll());
  });

  test('calls exportToCSV when "Download" button is clicked', () => {
    renderWithProviders();

    const button = screen.getByText('Download');
    fireEvent.click(button);

    expect(exportToCSV).toHaveBeenCalledWith([
      { name: 'Character 1', url: 'https://swapi.dev/api/people/1/' },
      { name: 'Character 2', url: 'https://swapi.dev/api/people/2/' },
    ]);
  });

  test('does not render if no items are selected', () => {
    store = mockStore({ selectedCharacters: { selected: {} } });
    renderWithProviders();

    expect(screen.queryByText(/items are selected/i)).toBeNull();
  });
});
