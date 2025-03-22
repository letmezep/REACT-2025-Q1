import { Country } from '../types/interfaces';

export const sortData = (
  data: Country[],
  sortBy: string,
  sortOrder: string
): Country[] => {
  if (!sortBy) return data;

  const sorted = [...data].sort((a, b) => {
    let aValue: string | number = '';
    let bValue: string | number = '';

    if (sortBy === 'name') {
      aValue = a.name.common.toLowerCase();
      bValue = b.name.common.toLowerCase();
    } else if (sortBy === 'population') {
      aValue = a.population;
      bValue = b.population;
    }

    if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  return sorted;
};
