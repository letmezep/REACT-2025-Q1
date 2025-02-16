import React from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { CardProps } from '../../types/interfaces';

import '../../styles/card-list.css';
import '../../styles/variables.css';

const Card: React.FC<CardProps> = ({ item }: CardProps) => {
  const thisID = item.url.split('/').filter(Boolean).pop();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleClick = () => {
    navigate(`/details/${thisID}?page=${searchParams.get('page') || 1}`);
  };

  return (
    <div className="list-item" role="article" onClick={handleClick}>
      <div className="list-item__description-container">
        <div className="list-item__name">{item.name}</div>
      </div>
    </div>
  );
};

export default Card;
