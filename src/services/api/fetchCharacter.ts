import { Character } from '../../types.ts/interfaces';
import getListFromApi from './getApiList';

export const fetchCharacter = async (): Promise<Character | null> => {
  try {
    const response: Character = await getListFromApi();
    return response;
  } catch (error) {
    console.error('Error fetch', error);
    return null;
  }
};
