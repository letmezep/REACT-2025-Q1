import { Country, Data } from '../types/interfaces';

export function getFilteredData(
  data: Data | null,
  searchTerm: string | null
): Country[] {
  if (!data) return [];

  if (!searchTerm) return data.countries;

  return data.countries.filter((item: Country) =>
    item.name.common.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );
  //   if (!searchTerm) return data;
  //   if (!searchTerm) return data?.results;

  //   return data.results.filter((item: Country) =>
  //     item.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  //   );
}
