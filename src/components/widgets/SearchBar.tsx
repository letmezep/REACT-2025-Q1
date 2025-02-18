import React, { useEffect, useState } from 'react';
import BaseButton from '../ui/BaseButton';
import BaseInput from '../ui/BaseInput';
import { useSearchQuery } from '../../hooks/useSearchQuery';
import ErrorButton from '../common/ErrorButton';
import { SearchBarProps } from '../../types/interfaces';
import { useSearchParams } from 'react-router';

const SearchBar: React.FC<SearchBarProps> = ({ onSearchChange }) => {
  const { searchTerm, setSearchTerm } = useSearchQuery();
  const [, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(
    localStorage.getItem('searchTerm') || ''
  );

  useEffect(() => {
    onSearchChange(searchTerm);
    setSearchParams({ search: searchTerm, page: '1' });
  }, [searchTerm, onSearchChange, setSearchParams]);

  const handleSearchClick = () => {
    setSearchTerm(inputValue);
    localStorage.setItem('searchTerm', searchTerm);
  };

  return (
    <div className="search-field__container">
      <BaseInput
        className="search-field__input"
        type="text"
        placeholder="Input search term"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <BaseButton className="search-field__button" onClick={handleSearchClick}>
        Search
      </BaseButton>

      <ErrorButton />
    </div>
  );
};

export default SearchBar;
