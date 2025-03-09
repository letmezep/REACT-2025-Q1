import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { useNavigate } from 'react-router';
import '@testing-library/jest-dom';
import { mockItem } from './mocks/cardPropsMock';
import Card from '../components/widgets/Card';
import { toggleSelection } from '../../components/store/slices/selectedItemsSlice';
import { Store, UnknownAction } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { JSX } from 'react/jsx-runtime';

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: jest.fn(),
}));

const mockStore = configureStore([]);

describe('Card component', () => {
  let store: Store<unknown, UnknownAction, unknown>;
  const mockNavigate = jest.fn();

  beforeEach(() => {
    store = mockStore({
      selectedCharacters: { selected: {} },
    });
    store.dispatch = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  });

  const renderWithProviders = (
    ui:
      | string
      | number
      | boolean
      | Iterable<ReactNode>
      | JSX.Element
      | null
      | undefined
  ) => {
    return render(
      <Provider store={store}>
        <MemoryRouter>{ui}</MemoryRouter>
      </Provider>
    );
  };

  test('renders card data', () => {
    renderWithProviders(<Card item={mockItem} />);
    expect(screen.getByText('Character 1')).toBeInTheDocument();
  });

  test('click to open details panel', () => {
    renderWithProviders(
      <Routes>
        <Route path="/details/:id" element={<div>Detail Component</div>} />
        <Route path="/" element={<Card item={mockItem} />} />
      </Routes>
    );

    const card = screen.getByText('Character 1');
    fireEvent.click(card);

    expect(mockNavigate).toHaveBeenCalledWith('/details/1?page=1');
  });

  test('toggle selection on checkbox click', () => {
    renderWithProviders(<Card item={mockItem} />);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(store.dispatch).toHaveBeenCalledWith(toggleSelection('1'));
  });
});
