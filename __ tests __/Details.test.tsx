import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import '@testing-library/jest-dom';
import Details from '../components/widgets/Details';
import { useGetCharacterByIdQuery } from '../components/services/api/starWarsApi';
import { useRouter } from 'next/router';
import { Store, UnknownAction } from '@reduxjs/toolkit';

jest.mock('../components/services/api/starWarsApi', () => ({
  useGetCharacterByIdQuery: jest.fn(),
}));

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const mockStore = configureStore([]);

describe('Details component', () => {
  let store: MockStoreEnhanced<unknown, {}> | Store<unknown, UnknownAction, unknown>;
  const pushMock = jest.fn();

  beforeEach(() => {
    store = mockStore({});

    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
    });
  });

  test('displays loading indicator while fetching data', async () => {
    (useGetCharacterByIdQuery as jest.Mock).mockReturnValue({
      data: undefined,
      isLoading: true,
      error: undefined,
    });

    render(
      <Provider store={store}>
        <Details characterId="1" />
      </Provider>
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
      <Provider store={store}>
        <Details characterId="1" />
      </Provider>
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
      <Provider store={store}>
        <Details characterId="1" />
      </Provider>
    );

    expect(
      screen.getByText('Error fetching character data.')
    ).toBeInTheDocument();
  });

  test('clicking close button navigates back to main page', async () => {
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
      <Provider store={store}>
        <Details characterId="1" />
      </Provider>
    );

    expect(await screen.findByText('Character 1')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Close X'));

    expect(pushMock).toHaveBeenCalledWith('/');
  });
});
