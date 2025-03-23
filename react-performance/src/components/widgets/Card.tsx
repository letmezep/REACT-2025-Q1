import React from 'react';
import { CardProps } from '../../types/interfaces';

const Card: React.FC<CardProps> = ({
  item,
  isVisited,
  onToggleVisited,
}: CardProps) => {
  const handleClick = () => {
    onToggleVisited(item.ccn3);
  };
  return (
    <div className="country-card__box" onClick={handleClick}>
      <div className={`card-item ${isVisited ? 'visited' : ''}`}>
        <img src={item.flags.png} alt="Country flag" />

        <div className="country-description-box">
          <p className="country-name">{item.name.common}</p>

          <div className="description-item__box">
            <p className="description-item">
              Region:{' '}
              <span className="description-item___data">{item.region}</span>
            </p>
            <p className="description-item">
              Population:{' '}
              <span className="description-item___data">{item.population}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Card);
