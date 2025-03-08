import { useRouter } from 'next/router';
import BaseButton from '../ui/BaseButton';
import { useGetCharacterByIdQuery } from '../api/starWarsApi';
import { DetailsProps } from '../types/interfaces';
import React from 'react';

const Details: React.FC<DetailsProps> = ({ characterId }) => {
  const router = useRouter();
  const { data, error, isLoading } = useGetCharacterByIdQuery(characterId, {
    skip: !characterId,
  });

  const handleClick = () => {
    router.push('/');
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching character data.</p>;

  return (
    <div className="details-panel">
      <BaseButton className="details__close-button" onClick={handleClick}>
        Close X
      </BaseButton>

      <h2 className="details__name">{data?.name}</h2>
      <div className="details__height">Height: {data?.height}</div>
      <div className="details__mass">Mass: {data?.mass}</div>
      <div className="details__skin_color">Skin Color: {data?.skin_color}</div>
      <div className="details__birth_year">Birth Year: {data?.birth_year}</div>
    </div>
  );
};

export default Details;
