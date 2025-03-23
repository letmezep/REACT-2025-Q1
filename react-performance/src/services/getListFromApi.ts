export default async function getListFromApi(url: string) {
  const response = fetch(url, {
    method: 'GET',
  });
  return (await response).json();
}
