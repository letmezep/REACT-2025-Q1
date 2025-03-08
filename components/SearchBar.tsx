import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import BaseButton from './ui/BaseButton';
import BaseInput from './ui/BaseInput';
import ErrorButton from './ui/ErrorButton';
import { SearchBarProps } from './types/interfaces';
import { useSearchQuery } from './hooks/useSearchQuery';
import ErrorBoundary from '../pages/ErrorBoundary';

const SearchBar: React.FC<SearchBarProps> = ({ onSearchChange }) => {
  const { searchTerm, setSearchTerm } = useSearchQuery();
  const router = useRouter();
  const [inputValue, setInputValue] = useState(
    typeof window !== 'undefined'
      ? localStorage.getItem('searchTerm') || ''
      : ''
  );

  useEffect(() => {
    onSearchChange(searchTerm);
    router.push({
      pathname: router.pathname,
      query: { search: searchTerm, page: '1' },
    });
  }, [searchTerm]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearchClick = () => {
    setSearchTerm(inputValue);
    localStorage.setItem('searchTerm', inputValue);
  };

  return (
    <div className="search-field__container">
      <BaseInput
        className="search-field__input"
        type="text"
        placeholder="Input search term"
        value={inputValue}
        onChange={handleInputChange}
      />

      <div className="search-field__buttons__box">
        <ErrorBoundary>
          <ErrorButton />
        </ErrorBoundary>
        <BaseButton
          className="search-field__button"
          variant="primary"
          onClick={handleSearchClick}
        >
          Search
        </BaseButton>
      </div>
    </div>
  );
};

export default SearchBar;
