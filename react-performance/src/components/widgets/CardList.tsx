import React, { useEffect, useMemo, useState } from 'react';
import Card from './Card';
import { Country } from '../../types/interfaces';
import { urlApi } from '../../constants/constants';
import { useSearchParams } from 'react-router-dom';
import { getFilteredData } from '../../services/filterData';
import { sortData } from '../../services/SortingData';

const CardList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const [visitedCountries, setVisitedCountries] = useState<string[]>([]);

  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('search') || '';

  const sortBy = searchParams.get('sortBy') || '';
  const sortOrder = searchParams.get('sortOrder') || 'asc';
  const selectedRegion = searchParams.get('region') || '';

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(urlApi);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCountries(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Something went wrong');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const toggleCountryVisited = (ccn3: string) => {
    setVisitedCountries((prev) =>
      prev.includes(ccn3) ? prev.filter((id) => id !== ccn3) : [...prev, ccn3]
    );
  };

  const filteredData = useMemo(() => {
    return getFilteredData({ countries }, searchTerm, selectedRegion);
  }, [countries, searchTerm, selectedRegion]);

  const sortedData = useMemo(() => {
    return sortData(filteredData, sortBy, sortOrder);
  }, [filteredData, sortBy, sortOrder]);

  if (loading) return <p>Loading countries</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="country-list">
        {sortedData.map((item: Country) => (
          <Card
            key={item.ccn3}
            item={item}
            isVisited={visitedCountries.includes(item.ccn3)}
            onToggleVisited={toggleCountryVisited}
          />
        ))}
      </div>
    </>
  );
};

export default React.memo(CardList);
