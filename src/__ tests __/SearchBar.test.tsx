import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { act } from 'react';
import SearchBar from '../components/widgets/SearchBar';

describe('SearchBar component', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test('clicking the Search button saves the entered value to local storage', async () => {
        render(
            <MemoryRouter>
                <SearchBar />
            </MemoryRouter>
        );

        const input = screen.getByPlaceholderText('Input search term') as HTMLInputElement;
        const button = screen.getByText('Search');

        fireEvent.change(input, { target: { value: 'Luke' } });
        fireEvent.click(button);

        await waitFor(() => expect(localStorage.getItem('search')).toBe('Luke'));
    });

    test('component retrieves the value from local storage upon mounting', () => {
        localStorage.setItem('search', 'Vader');

        act(() => {
            render(
                <MemoryRouter>
                    <SearchBar />
                </MemoryRouter>
            );
        });

        const input = screen.getByPlaceholderText('Input search term') as HTMLInputElement;
        expect(input.value).toBe('Vader');
    });
});
