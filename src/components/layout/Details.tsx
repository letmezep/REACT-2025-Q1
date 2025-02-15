import { Character } from '../../types.ts/interfaces';
import { fetchCharacter } from '../../services/api/fetchCharacter';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import BaseButton from '../ui/BaseButton';

const Details = () => {
  const navigate = useNavigate();
  const [character, setCharacter] = useState<Character | null>(null);
  const { id } = useParams<{ id?: string }>();

  const handleClick = () => {
    navigate(`/`);
  };

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
        <BaseButton className="details__close-button" onClick={handleClick}>
          {' '}
          Close X
        </BaseButton>

        <h2>character details</h2>

        <div className="name">name: {character?.name}</div>
        <div className="height">height: {character?.height}</div>
        <div className="mass">mass: {character?.mass}</div>
        <div className="skin_color">skin color: {character?.skin_color}</div>
        <div className="birth_year">birth year: {character?.birth_year}</div>
      </div>
    </>
  );
};

export default Details;
