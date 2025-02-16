// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { useNavigate } from 'react-router';
import '@testing-library/jest-dom';

import { mockItem } from './mocks/cardPropsMock';

import Card from '../components/widgets/Card';
// import { CardProps } from '../types/interfaces';
// import { fetchData } from '../services/api/fetchData';

jest.mock('../services/api/fetchData', () => ({
    fetchData: jest.fn(),
}));

jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useNavigate: jest.fn(),
}));

describe('Card component', () => {
    const mockNavigate = jest.fn();

    beforeEach(() => {
        (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    });

    test('renders card data', () => {
        render(
            <MemoryRouter>
                <Card item={mockItem} />
            </MemoryRouter>
        );

        expect(screen.getByText('Character 1')).toBeInTheDocument();
    });

    test('click to open details panel', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route
                        path="/details/:id"
                        element={<div>Detail Component</div>}
                    />
                    <Route
                        path="/"
                        element={<Card item={mockItem} />}
                    />
                </Routes>
            </MemoryRouter>
        );

        const card = screen.getByText('Character 1');
        fireEvent.click(card);

        expect(mockNavigate).toHaveBeenCalledWith('/details/1?page=1');
    });

    // test('clicking the card triggers an additional API call for details', async () => {

    //     const mockItem: CardProps['item'] = {
    //         url: '1',
    //         name: 'Character 1',
    //         height: '',
    //         mass: '',
    //         hair_color: '',
    //         skin_color: '',
    //         eye_color: '',
    //         birth_year: '',
    //         gender: '',
    //         homeworld: '',
    //         films: [''],
    //         species: [''],
    //         vehicles: [''],
    //         starships: [''],
    //         created: [''],
    //         edited: ['']
    //     };

    //     (fetchData as jest.Mock).mockResolvedValueOnce({
    //         results: [{ name: 'Character 1 Details', description: 'Detailed info' }],
    //     });

    //     render(
    //         <MemoryRouter>
    //             <Card item={mockItem} />
    //         </MemoryRouter>
    //     );

    //     fireEvent.click(screen.getByText('Character 1'));
    //     await waitFor(() => expect(fetchData).toHaveBeenCalledWith('https://api.example.com/details/1?page=1'));

    // });
});
