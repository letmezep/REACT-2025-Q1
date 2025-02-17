export default async function getListFromApi(url: string) {
  const response = await fetch(url, {
    method: 'GET',
  });
  return await response.json();
}
