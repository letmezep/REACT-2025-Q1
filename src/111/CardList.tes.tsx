// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import { MemoryRouter } from 'react-router';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
// import '@testing-library/jest-dom';
// import CardList from '../components/widgets/CardList';
// import { useGetCharactersQuery } from '../../components/services/api/starWarsApi';
// import { mockCharacterData } from '../../__ tests __/mocks/fetchDataMock';
// import { Store, UnknownAction } from '@reduxjs/toolkit';

// jest.mock('../services/api/starWarsApi', () => ({
//   useGetCharactersQuery: jest.fn(),
// }));

// const mockStore = configureStore([]);

// describe('Component CardList', () => {
//   let store: Store<unknown, UnknownAction, unknown>;

//   beforeEach(() => {
//     store = mockStore({
//       selectedCharacters: { selected: {} },
//     });
//   });

//   test('renders list of characters and handles pagination', async () => {
//     (useGetCharactersQuery as jest.Mock).mockReturnValue({
//       data: mockCharacterData,
//       isLoading: false,
//     });

//     render(
//       <Provider store={store}>
//         <MemoryRouter>
//           <CardList />
//         </MemoryRouter>
//       </Provider>
//     );

//     await waitFor(() => screen.getByText('Page 1 of 2'));
//     const cards = screen.getAllByRole('article');
//     expect(cards).toHaveLength(10);

//     fireEvent.click(screen.getByText('Next'));
//     await waitFor(() => screen.getByText('Page 2 of 2'));
//   });

//   test('displays no characters found when data is empty', async () => {
//     (useGetCharactersQuery as jest.Mock).mockReturnValue({
//       data: { count: 0, results: [] },
//       isLoading: false,
//     });

//     render(
//       <Provider store={store}>
//         <MemoryRouter>
//           <CardList />
//         </MemoryRouter>
//       </Provider>
//     );

//     await waitFor(() => screen.getByText('No characters found'));
//     expect(screen.getByText('No characters found')).toBeInTheDocument();
//   });

//   test('shows loader while loading', async () => {
//     (useGetCharactersQuery as jest.Mock).mockReturnValue({
//       data: null,
//       isLoading: true,
//     });

//     render(
//       <Provider store={store}>
//         <MemoryRouter>
//           <CardList />
//         </MemoryRouter>
//       </Provider>
//     );

//     expect(screen.getByTestId('loader')).toBeInTheDocument();
//   });
// });
