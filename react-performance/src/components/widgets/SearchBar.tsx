import { useCallback, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchBar: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialValue = searchParams.get('search') || '';
  const [inputValue, setInputValue] = useState(initialValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = useCallback(() => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      if (inputValue) {
        newParams.set('search', inputValue);
      } else {
        newParams.delete('search');
      }
      return newParams;
    });
  }, [inputValue, setSearchParams]);

  return (
    <div className="search-box">
      <input
        type="text"
        className="search-input"
        placeholder="Input search term"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className="search-btn" onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
