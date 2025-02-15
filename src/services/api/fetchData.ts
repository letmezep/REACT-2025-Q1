import getListFromApi from './getListFromApi';
import { Data } from '../../types.ts/interfaces';

export const fetchData = async (url: string): Promise<Data | null> => {
  try {
    const response: Data = await getListFromApi(url);
    return response;
  } catch (error) {
    console.error('Error fetch', error);
    return null;
  }
};
