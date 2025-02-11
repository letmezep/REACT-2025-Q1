import getListFromApi from './getApiList';
import { Data } from '../../types.ts/interfaces';

export const fetchData = async (): Promise<Data | null> => {
  try {
    const response: Data = await getListFromApi();
    return response;
  } catch (error) {
    console.error('Error fetch', error);
    return null;
  }
};
