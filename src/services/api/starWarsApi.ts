import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const starWarsApi = createApi({
  reducerPath: 'starWarsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    getCharacterById: builder.query({
      query: (id: string) => `people/${id}`,
    }),
    searchCharacters: builder.query({
      query: (name: string) => `people/?search=${name}`,
    }),
    getPage: builder.query({
      query: (page: string) => `people/?page=${page}`,
    }),
  }),
});

export const {
  useGetCharacterByIdQuery,
  useSearchCharactersQuery,
  useGetPageQuery,
} = starWarsApi;
