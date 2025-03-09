import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';
import CardList from '../components/CardList';
import { useGetCharactersQuery } from '../components/services/api/starWarsApi';
import { mockCharacterData } from './mocks/fetchDataMock';
import { Store, UnknownAction } from '@reduxjs/toolkit';
import { useRouter } from 'next/router';

jest.mock('../components/services/api/starWarsApi.ts', () => ({
  useGetCharactersQuery: jest.fn(),
}));

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const mockStore = configureStore([]);

describe('CardList Component', () => {
  let store: Store<unknown, UnknownAction, unknown>;
  const pushMock = jest.fn();

  beforeEach(() => {
    store = mockStore({
      selectedCharacters: { selected: {} },
    });

    (useRouter as jest.Mock).mockReturnValue({
      pathname: '/characters',
      query: { page: '1' },
      push: pushMock,
    });
  });

  test('renders list of characters and handles pagination', async () => {
    (useGetCharactersQuery as jest.Mock).mockReturnValue({
      data: mockCharacterData,
      isLoading: false,
    });

    render(
      <Provider store={store}>
        <CardList />
      </Provider>
    );
    await waitFor(() => screen.getByText('Page 1 of 2'));
    const cards = screen.getAllByRole('article');
    expect(cards).toHaveLength(10);
    fireEvent.click(screen.getByText('Next'));
  });

  test('displays no characters found when data is empty', async () => {
    (useGetCharactersQuery as jest.Mock).mockReturnValue({
      data: { count: 0, results: [] },
      isLoading: false,
    });

    render(
      <Provider store={store}>
        <CardList />
      </Provider>
    );

    await waitFor(() => screen.getByText('No characters found'));
    expect(screen.getByText('No characters found')).toBeInTheDocument();
  });

  test('shows loader while loading', async () => {
    (useGetCharactersQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
    });

    render(
      <Provider store={store}>
        <CardList />
      </Provider>
    );

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  test('handles pagination with Next and Previous buttons', async () => {
    (useGetCharactersQuery as jest.Mock).mockReturnValue({
      data: mockCharacterData,
      isLoading: false,
    });

    render(
      <Provider store={store}>
        <CardList />
      </Provider>
    );

    const previousButton = screen.getByText('Previous');
    const nextButton = screen.getByText('Next');
    expect(previousButton).toBeDisabled();
    fireEvent.click(nextButton);
    await waitFor(() =>
      expect(pushMock).toHaveBeenCalledWith({
        pathname: '/characters',
        query: { page: '2' },
      })
    );
  });
});
