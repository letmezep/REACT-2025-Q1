// // jest.mock('../components/services/api/starWarsApi', () => ({
// //   starWarsApi: {
// //     reducerPath: 'starWarsApi',
// //     reducer: (state = {}) => state,
// //     middleware: () => (next: (arg0: any) => any) => (action: any) => next(action),
// //     endpoints: {
// //       getCharacters: {
// //         useQuery: jest.fn(() => ({ data: [], isLoading: false })),
// //       },
// //     },
// //   },
// // }));


// jest.mock('../components/services/api/starWarsApi', () => ({
//   starWarsApi: {
//     reducerPath: 'starWarsApi',
//     reducer: (state = {}) => state,
//     middleware: () => (next: (arg0: any) => any) => (action: any) => next(action),
//     useGetCharactersQuery: jest.fn(() => ({ data: [], isLoading: false })), 
//     useGetCharacterByIdQuery: jest.fn(() => ({ data: null, isLoading: false })), 
//   },
// }));

// import { starWarsApi } from '../components/services/api/starWarsApi';
// import { render } from '@testing-library/react';
// import { screen } from '@testing-library/react';
// import Index from '../pages/index';
// import { useSearchQuery } from '../components/hooks/useSearchQuery';
// // import { useRouter } from 'next/router';
// import { Provider } from 'react-redux';
// import { store } from '../components/store/store';
// // import { rootReducer } from '../components/store/store';
// // import { configureStore } from '@reduxjs/toolkit';

// jest.mock('../components/hooks/useSearchQuery', () => ({
//   useSearchQuery: jest.fn(),
// }));

// jest.mock('next/router', () => ({
//   useRouter: jest.fn(() => ({
//     pathname: '/mock-path',
//     query: {},
//     push: jest.fn(),
//   })),
//   // useRouter: () => ({
//   //   pathname: '/mock-path',
//   //   query: {},
//   //   push: jest.fn(),
//   // }),
// }));
// import { useRouter } from 'next/router';

// const renderWithRedux = (component: JSX.Element) => {
//   return render(<Provider store={store}>{component}</Provider>);
// }

// import '@testing-library/jest-dom';

// // jest.mock('../components/services/api/starWarsApi', () => ({
// //   starWarsApi: {
// //     reducerPath: 'starWarsApi',
// //     reducer: jest.fn(),
// //     middleware: jest.fn(), 
// //     endpoints: {
// //       getCharacters: {
// //         useQuery: jest.fn(() => ({ data: [], isLoading: false })),
// //       },
// //     },
// //   },
// // }));


// describe('Index Page', () => {
// beforeAll(() => {
//   jest.resetModules();
// });

//   beforeEach(() => {
//     (useSearchQuery as jest.Mock).mockReturnValue({
//       searchTerm: '',
//       setSearchTerm: jest.fn(),
//     });
//     // jest.resetModules();
//     (useRouter as jest.Mock).mockReturnValue({ query: {}, push: jest.fn(), });
//     (starWarsApi.useGetCharactersQuery as jest.Mock).mockReturnValue({
//       data: [],
//       isLoading: false,
//     });
//   });

//   test('render interface', () => {
//     // render(<Index />);
//     renderWithRedux(<Index />);

//     expect(screen.getByRole('button', { name: /theme/i })).toBeInTheDocument();
//     expect(screen.getByRole('textbox')).toBeInTheDocument();
//     expect(screen.getByTestId('card-list')).toBeInTheDocument();
//   });

//   test('render Details if(selectedId)', () => {
//     (useRouter as jest.Mock).mockReturnValue({ query: { id: '123' } });
//     // render(<Index />);
//     renderWithRedux(<Index />);

//     expect(screen.getByTestId('details')).toBeInTheDocument();
//   });
// });