export interface Data {
  countries: Country[];
}

export interface CardProps {
  item: Country;
}

export interface Country {
  name: CountryName;
  population: number;
  region: string;
  ccn3: string;
  flags: Flags;
}

export interface CountryName {
  common: string;
  official: string;
}

export interface Flags {
  png: string;
  svg: string;
}

export interface HeaderProps {
  onSearchChange: (term: string) => void;
}

export interface SearchBarProps {
  onSearchChange: (term: string) => void;
}
