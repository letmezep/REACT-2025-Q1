import { Character } from '../../types.ts/interfaces';
import { fetchCharacter } from '../../services/api/fetchCharacter';
import { useEffect, useState } from 'react';

const Details = () => {
  const [character, setCharacter] = useState<Character | null>(null);
  const id = '1';

  useEffect(() => {
    async function getDetails(id: string) {
      const character1: Character | null = await fetchCharacter(id);
      setCharacter(character1);
    }

    getDetails(id);
  }, []);

  return (
    <>
      <div className="details-panel">
        <h2>character</h2>

        <div>{character?.name}</div>
        <div>{character?.skin_color}</div>
      </div>
    </>
  );
};

export default Details;
