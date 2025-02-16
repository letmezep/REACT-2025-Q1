import { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router';
import { fetchCharacter } from '../../services/api/fetchCharacter';
import BaseButton from '../ui/BaseButton';
import { imgLink } from '../../constants';
import { Character } from '../../types/interfaces';

import '../../styles/details.css';

const Details = () => {
  const navigate = useNavigate();
  const [character, setCharacter] = useState<Character | null>(null);
  const { id } = useParams<{ id?: string }>();

  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  const handleClick = () => {
    navigate(`/?page=${page}`);
  };

  useEffect(() => {
    if (!id) return;

    async function getDetails(id: string) {
      try {
        const res: Character | null = await fetchCharacter(id);
        if (!res) {
          // console.error(`Character with id=${id} not found`);
          return;
        }
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
          Close X
        </BaseButton>

        <h2 className="details__name">{character?.name}</h2>

        <img
          className="details__image"
          src={`${imgLink}${id}.jpg`}
          alt="character image"
        />

        <div className="details__height">height: {character?.height}</div>
        <div className="details__mass">mass: {character?.mass}</div>
        <div className="details__skin_color">
          skin color: {character?.skin_color}
        </div>
        <div className="details__birth_year">
          birth year: {character?.birth_year}
        </div>
      </div>
    </>
  );
};

export default Details;
