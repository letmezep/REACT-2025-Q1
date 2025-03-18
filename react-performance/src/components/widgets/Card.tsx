import React from 'react';
import { CardProps } from '../../types/interfaces';

const Card: React.FC<CardProps> = ({ item }: CardProps) => {
  return (
    <div className="country-card__box">
      <div className="card-item">
        <p>{item.region}</p>
        <p>{item.population}</p>
      </div>
    </div>
  );
};

export default Card;
