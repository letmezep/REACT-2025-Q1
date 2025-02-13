import React, { useEffect, useState } from 'react';
import Card from './Card';
import { getFilteredData } from '../../services/filterData';
import { Character, Data } from '../../types.ts/interfaces';
import { localStorageItem } from '../../constants';
import { fetchData } from '../../services/api/fetchData';

const CardList: React.FC = () => {
  const [data, setData] = useState<Data | null>(null);
  const [filterData, setFilterData] = useState<Character[] | null>(null);
  const searchTerm = localStorageItem;

  useEffect(() => {
    const loadData = async () => {
      const response = await fetchData();
      setData(response);
    };

    loadData();
  }, []);

  useEffect(() => {
    const filteredData = getFilteredData(data, searchTerm);
    setFilterData(filteredData);
  }, [data, searchTerm]);

  return (
    <>
      <div className="card-list">
        {filterData && filterData.length > 0 ? (
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
