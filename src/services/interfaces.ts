import { ReactNode } from 'react';

export interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: [string];
  species: [string];
  vehicles: [string];
  starships: [string];
  created: [string];
  edited: [string];
  url: string;
}

export interface Data {
  results: Character[];
}

export interface State {
  data: Data | null;
  loading: boolean;
  error: string | null;
  searchTerm: string | null;
}

export interface SearchFieldProps {
  onSearchChange: (value: string) => void;
}

export interface ErrorBoundaryProps {
  children: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}
