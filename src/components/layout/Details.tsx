import { Character } from '../../types.ts/interfaces';
import { fetchCharacter } from '../../services/api/fetchCharacter';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
  const [character, setCharacter] = useState<Character | null>(null);
  //   const id = '1';
  const { id } = useParams<{ id?: string }>();

  useEffect(() => {
    if (!id) return;

    async function getDetails(id: string) {
      const character1: Character | null = await fetchCharacter(id);
      setCharacter(character1);
    }

    getDetails(id);
  }, [id]);

  return (
    <>
      <div className="details-panel">
        <h2>character details</h2>

        {character ? (
          <>
            <div>{character?.name}</div>
            <div>{character?.skin_color}</div>
          </>
        ) : (
          <p>Loading...</p>
        )}

        <div>{character?.name}</div>
        <div>{character?.skin_color}</div>
      </div>
    </>
  );
};

export default Details;
