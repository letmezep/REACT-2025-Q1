import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { useParams } from 'react-router';
import '@testing-library/jest-dom';
import Details from '../components/layout/Details';
import { fetchCharacter } from '../services/api/fetchCharacter';
import { mockCharacter } from './mocks/fetchCharacterMock';

jest.mock('../services/api/fetchCharacter');
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
        (fetchCharacter as jest.Mock).mockResolvedValueOnce(null);

        render(
            <MemoryRouter>
                <Details />
            </MemoryRouter>
        );

        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    test('renders detailed character data', async () => {
        (fetchCharacter as jest.Mock).mockResolvedValueOnce(mockCharacter);

        render(
            <MemoryRouter>
                <Details />
            </MemoryRouter>
        );

        await waitFor(() => expect(screen.getByText('Character 1')).toBeInTheDocument());

        expect(screen.getByText('height: 180')).toBeInTheDocument();
        expect(screen.getByText('mass: 75')).toBeInTheDocument();
        expect(screen.getByText('skin color: fair')).toBeInTheDocument();
        expect(screen.getByText('birth year: 1990')).toBeInTheDocument();
    });

    test('clicking close button hides the component', async () => {
        const mockNavigate = jest.fn();
        (fetchCharacter as jest.Mock).mockResolvedValueOnce(mockCharacter);
        jest.spyOn(require('react-router'), 'useNavigate').mockReturnValue(mockNavigate);

        render(
            <MemoryRouter initialEntries={['/details/1?page=1']}>
                <Routes>
                    <Route path="/details/:id" element={<Details />} />
                </Routes>
            </MemoryRouter>
        );

        await waitFor(() => expect(screen.getByText('Character 1')).toBeInTheDocument());

        fireEvent.click(screen.getByText('Close X'));

        expect(mockNavigate).toHaveBeenCalledWith('/?page=1');
    });
});
