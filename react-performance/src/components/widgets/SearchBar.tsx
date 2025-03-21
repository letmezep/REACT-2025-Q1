import { useState } from 'react';
import { SearchBarProps } from '../../types/interfaces';
import { useSearchQuery } from '../../hooks/useSearchQuery';
import { useSearchParams } from 'react-router-dom';

const SearchBar: React.FC<SearchBarProps> = ({ onSearchChange }) => {
  //   const [inputValue, setInputValue] = useState<string>('');
  const [inputValue, setInputValue] = useState(
    localStorage.getItem('searchTerm') || ''
  );
  const { setSearchTerm } = useSearchQuery();
  const [, setSearchParams] = useSearchParams();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    setSearchTerm(inputValue);
    localStorage.setItem('searchTerm', inputValue);
    onSearchChange(inputValue);
    setSearchParams({ search: inputValue });
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
