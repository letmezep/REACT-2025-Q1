import { useState, useEffect } from 'react';
import './App.css';
import { urlApi } from './constants/constants';
import { Country } from './types/interfaces';

const App = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

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

  if (loading) return <p>Loading countries</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div>
        <h1>Countries</h1>
        <ul>
          {countries.map((country) => (
            <li key={country.cca3}>
              <img
                src={country.flags.png}
                alt="Country flag"
                width={100}
                height={100}
              />
              <h2>{country.name.common}</h2>
              <p>Population: {country.population.toLocaleString()}</p>
              <p>Region: {country.region}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
