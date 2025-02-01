import { Character, Data } from './interfaces';

export function getFilteredData(
  data: Data | null,
  searchTerm: string | null
): Character[] {
  // const { data, searchTerm } = this.state;

  if (!data) return [];
  if (!searchTerm) return data?.results;

  return data.results.filter((item: Character) =>
    item.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );
}
