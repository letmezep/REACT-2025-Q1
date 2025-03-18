export interface Data {
  countries: [];
}

export interface CardProps {
  item: Country;
}

export interface CountryName {
  common: string;
  official: string;
}

export interface Flags {
  png: string;
  svg: string;
}

export interface Country {
  name: CountryName;
  population: number;
  region: string;
  cca3: string;
  flags: Flags;
}
