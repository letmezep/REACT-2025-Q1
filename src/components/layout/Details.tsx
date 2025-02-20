import React from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router';
import {useGetCharacterByIdQuery} from '../../services/api/starWarsApi';
import BaseButton from '../ui/BaseButton';

import '../../styles/details.css';

const Details: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const {data, error, isLoading } = useGetCharacterByIdQuery(
    id ?? '', { skip: !id }
  );
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/?page=${page}`);
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
