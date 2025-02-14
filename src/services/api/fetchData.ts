import getListFromApi from './getListFromApi';
import { Data } from '../../types.ts/interfaces';
import { urlApi } from '../../constants';

export const fetchData = async (): Promise<Data | null> => {
  try {
    const response: Data = await getListFromApi(urlApi);
    return response;
  } catch (error) {
    console.error('Error fetch', error);
    return null;
  }
};
