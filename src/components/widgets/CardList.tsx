import React, { useEffect, useState } from 'react';
import Card from './Card';
import Loader from '../ui/Loader';
import { CardListProps } from '../../types.ts/interfaces';
import { getFilteredData } from '../../services/filterData';
import { Character, Data } from '../../types.ts/interfaces';
import { fetchData } from '../../services/api/fetchData';

import '../../styles/card-list.css';
import '../../styles/variables.css';

const CardList: React.FC<CardListProps> = ({ searchTerm }) => {
  const [data, setData] = useState<Data | null>(null);
  const [filterData, setFilterData] = useState<Character[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchData();
        setData(response);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    if (data) {
      setFilterData(getFilteredData(data, searchTerm));
    } else {
      setLoading(false);
    }
  }, [data, searchTerm]);

  if (loading || !data) return <Loader />;

  return (
    <>
      <div className="card-list">
        {filterData && filterData?.length > 0 ? (
          filterData.map((item: Character, index: number) => (
            <Card key={index} item={item} />
          ))
        ) : (
          <p>No characters found</p>
        )}
      </div>
    </>
  );
};

export default CardList;
