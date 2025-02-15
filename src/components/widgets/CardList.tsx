import React, { useEffect, useState } from 'react';
import Card from './Card';
import Loader from '../ui/Loader';
import { getFilteredData } from '../../services/filterData';
import { CardListProps, Character, Data } from '../../types.ts/interfaces';
import { fetchData } from '../../services/api/fetchData';

import '../../styles/card-list.css';
import '../../styles/variables.css';
import BaseButton from '../ui/BaseButton';
import { useSearchParams } from 'react-router';
import { urlPage } from '../../constants';

const CardList: React.FC<CardListProps> = ({ searchTerm }) => {
  const [data, setData] = useState<Data | null>(null);
  const [filterData, setFilterData] = useState<Character[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [prevPage, setPrevPage] = useState<string | null>(null);
  const [nextPage, setNextPage] = useState<string | null>(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  const changePage = (newPage: number) => {
    setSearchParams({ page: newPage.toString() });
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchData(`${urlPage}${page}`);
        setData(response);
        if (response) {
          setPrevPage(response.previous ?? null);
          setNextPage(response.next ?? null);
        }
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [page]);

  useEffect(() => {
    if (data) {
      setFilterData(getFilteredData(data, searchTerm));
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
      <div className="card-list__pagination">
        <BaseButton
          onClick={() => {
            changePage(page - 1);
          }}
          disabled={!prevPage}
        >
          previous
        </BaseButton>
        <div className="pagination__page-number">{page}</div>
        <BaseButton
          onClick={() => {
            changePage(page + 1);
          }}
          disabled={!nextPage}
        >
          next
        </BaseButton>
      </div>
    </>
  );
};

export default CardList;
