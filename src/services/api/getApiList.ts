import { urlApi } from '../constant';

export default async function getListFromApi() {
  const response = await fetch(urlApi, {
    method: 'GET',
  });
  return await response.json();
}
