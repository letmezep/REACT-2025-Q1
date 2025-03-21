import React, { useEffect, useState } from 'react';
import Card from './Card';
import { Country } from '../../types/interfaces';
import { urlApi } from '../../constants/constants';
import { useSearchParams } from 'react-router-dom';
import { getFilteredData } from '../../services/filterData';

const CardList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const [filteredData, setFilteredData] = useState<Country[]>([]);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('search') || '';

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

  useEffect(() => {
    const filtered = getFilteredData({ countries }, searchTerm);
    setFilteredData(filtered);
  }, [countries, searchTerm]);

  if (loading) return <p>Loading countries</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="country-list">
        {filteredData.map((item: Country) => (
          <Card key={item.ccn3} item={item} />
        ))}
      </div>
    </>
  );
};

export default CardList;
