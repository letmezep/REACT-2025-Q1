import React, { useEffect, useState } from 'react';
import BaseButton from '../ui/BaseButton';
import BaseInput from '../ui/BaseInput';
import ErrorButton from '../common/ErrorButton';
import { SearchBarProps } from '../../types/interfaces';
import { useSearchParams } from 'react-router';
import { useSearchQuery } from '../../hooks/useSearchQuery';

const SearchBar: React.FC<SearchBarProps> = ({ onSearchChange }) => {
  const { searchTerm, setSearchTerm } = useSearchQuery();
  const [, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(localStorage.getItem('searchTerm') || '');

  useEffect(() => {
    onSearchChange(searchTerm);
    setSearchParams({ search: searchTerm, page: '1' });
  }, [searchTerm]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearchClick = () => {
    setSearchTerm(inputValue);
    localStorage.setItem('searchTerm', searchTerm);
  };

  return (
    <div className='search-field__container'>
      <BaseInput
        className='search-field__input'
        type='text'
        placeholder='Input search term'
        value={inputValue}
        onChange={handleInputChange}
      />
      <BaseButton
        className='search-field__button'
        variant='primary'
        onClick={handleSearchClick}>Search</BaseButton>
      <ErrorButton />
    </div>
  );
};

export default SearchBar;
