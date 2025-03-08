import {
  ButtonHTMLAttributes,
  ChangeEvent,
  InputHTMLAttributes,
  ReactNode,
} from 'react';

export interface BaseButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'error';
}

export interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary' | 'secondary' | 'error';
}

export interface CardProps {
  item: Character;
}

export interface CardListProps {
  searchTerm: string;
}

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
  previous: string | null;
  next: string | null;
  results: Character[];
}

export interface DetailsProps {
  characterId: string;
}

export interface ErrorBoundaryProps {
  children: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  errorKey: number;
}

export interface HeaderProps {
  onSearchChange: (term: string) => void;
}

export interface PageResponse {
  count: number;
  results: Character[];
}

export interface SearchBarProps {
  onSearchChange: (term: string) => void;
}

export interface SearchFieldProps {
  searchTerm: string;
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

export interface State {
  data: Data | null;
  loading: boolean;
  searchTerm: string | null;
}

export interface ThemeProviderProps {
  children: ReactNode;
}
