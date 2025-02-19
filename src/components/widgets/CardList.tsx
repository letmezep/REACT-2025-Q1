import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import Card from './Card';
import Loader from '../ui/Loader';
import BaseButton from '../ui/BaseButton';
import { getFilteredData } from '../../services/filterData';
import { useGetPageQuery } from '../../services/api/starWarsApi';
import { Character } from '../../types/interfaces';
import { itemsPerPage } from '../../constants';
import { urlPage } from '../../constants';

import '../../styles/card-list.css';
import '../../styles/variables.css';

const CardList: React.FC = () => {
  const [allData, setAllData] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get('search') || '';
  const page = Number(searchParams.get('page')) || 1;

  const { isFetching } = useGetPageQuery(String(currentPage));

  useEffect(() => {
    const loadAllPages = async () => {
      setLoading(true);
      let results: Character[] = [];
      let pageNum = 1;
      let nextPage = true;

      while (nextPage) {
        const response = await fetch(`${urlPage}${pageNum}`).then((res) =>
          res.json()
        );
        if (response?.results) {
          results = [...results, ...response.results];
        }
        nextPage = response.next !== null;
        pageNum++;
      }

      setAllData(results);
      setLoading(false);
    };

    loadAllPages();
  }, []);

  const filteredData = searchTerm
    ? getFilteredData(
        { results: allData, previous: null, next: null },
        searchTerm
      )
    : allData;

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const changePage = (newPage: number) => {
    setSearchParams({ search: searchTerm, page: newPage.toString() });
    setCurrentPage(newPage);
  };

  if (loading || isFetching) return <Loader />;

  return (
    <>
      <div className="card-list">
        {paginatedData.length > 0 ? (
          paginatedData.map((item: Character) => (
            <Card key={item.url} item={item} />
          ))
        ) : (
          <p>No characters found</p>
        )}
      </div>

      <div className="card-list__pagination">
        <BaseButton onClick={() => changePage(page - 1)} disabled={page <= 1}>
          Previous
        </BaseButton>
        <div className="pagination__page-number">
          Page {page} of {totalPages}
        </div>
        <BaseButton
          onClick={() => changePage(page + 1)}
          disabled={page >= totalPages}
        >
          Next
        </BaseButton>
      </div>
    </>
  );
};

export default CardList;
