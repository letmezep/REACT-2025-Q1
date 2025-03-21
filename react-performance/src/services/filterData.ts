import { Country, Data } from '../types/interfaces';

export function getFilteredData(
  data: Data | null,
  searchTerm: string | null,
  region: string | null,
  sortBy: string | null,
  sortOrder: string | null
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

  if (sortBy === 'name') {
    filtered = filtered.sort((a, b) => {
      const nameA = a.name.common.toLowerCase();
      const nameB = b.name.common.toLowerCase();
      if (nameA < nameB) return sortOrder === 'asc' ? -1 : 1;
      if (nameA > nameB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  } else if (sortBy === 'population') {
    filtered = filtered.sort((a, b) => {
      return sortOrder === 'asc'
        ? a.population - b.population
        : b.population - a.population;
    });
  }

  return filtered;
}
