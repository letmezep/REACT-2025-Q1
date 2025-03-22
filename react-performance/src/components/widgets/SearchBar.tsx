import { useState } from 'react';
import { SearchBarProps } from '../../types/interfaces';
import { useSearchParams } from 'react-router-dom';

const SearchBar: React.FC<SearchBarProps> = ({ onSearchChange }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialValue = searchParams.get('search') || '';
  const [inputValue, setInputValue] = useState(initialValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    setSearchParams({ search: inputValue });
    onSearchChange(inputValue);
  };

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
