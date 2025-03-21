import { Country, Data } from '../types/interfaces';

export function getFilteredData(
  data: Data | null,
  searchTerm: string | null,
  region: string | null
): Country[] {
  if (!data) return [];

  let filtered = data.countries;

  if (searchTerm) {
    filtered = filtered.filter((item: Country) =>
      item.name.common.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
  }

  if (region) {
    filtered = filtered.filter((item: Country) => item.region === region);
  }

  return filtered;
}
