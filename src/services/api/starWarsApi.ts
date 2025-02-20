import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Character, PageResponse } from '../../types/interfaces';

export const starWarsApi = createApi({
  reducerPath: 'starWarsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    getCharacters: builder.query<
      PageResponse,
      { search?: string; page?: string; characterId?: string }
    >({
      query: ({ search, page }) => {
        let url = 'people/?';
        if (search) {
          url += `search=${encodeURIComponent(search)}&`;
        }
        if (page) {
          url += `page=${page}`;
        }
        return url;
      },
    }),

    getCharacterById: builder.query<Character, string>({
      query: (id) => `people/${id}/`,
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterByIdQuery } = starWarsApi;
