import { Character } from '../../types.ts/interfaces';
import { fetchCharacter } from '../../services/api/fetchCharacter';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
  const [character, setCharacter] = useState<Character | null>(null);
  const { id } = useParams<{ id?: string }>();

  useEffect(() => {
    if (!id) return;

    async function getDetails(id: string) {
      try {
        const res: Character | null = await fetchCharacter(id);
        if (!res) {
          console.error(`Character with id ${id} not found`);
          return;
        }
        console.log('Fetched character:', res);
        setCharacter(res);
      } catch (error) {
        console.log(error);
      }
    }

    getDetails(id);
  }, [id]);

  if (!character) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="details-panel">
        <h2>character details</h2>
        <div className="name">name: {character?.name}</div>
        <div className="skin_color">skin color: {character?.skin_color}</div>

        {/* {character ? (
          <>
            <div className='name'>name: {character?.name}</div>
            <div className='skin_color'>skin color: {character?.skin_color}</div>
          </>
        ) : (
          <p>Loading...</p>
        )}

        <div>fallback name: {character?.name}</div>
        <div>{character?.skin_color}</div> */}
      </div>
    </>
  );
};

export default Details;
