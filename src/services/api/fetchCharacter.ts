import { urlApi } from '../../constants';
import { Character } from '../../types.ts/interfaces';
import getListFromApi from './getListFromApi';

export const fetchCharacter = async (id: string): Promise<Character | null> => {
  try {
    const response: Character = await getListFromApi(`${urlApi}${id}`);
    return response;
  } catch (error) {
    console.error('Error fetch', error);
    return null;
  }
};
