import React, { ChangeEvent } from 'react';
import BaseButton from '../ui/BaseButton';
import BaseInput from '../ui/BaseInput';
import { SearchBarProps } from '../../types.ts/interfaces';
import { useSearchQuery } from '../../hooks/useSearchQuery';
import ErrorButton from '../common/ErrorButton';

const SearchBar: React.FC<SearchBarProps> = ({ onSearchChange }) => {
  const { searchTerm, setSearchTerm } = useSearchQuery();

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  function handleSearch() {
    onSearchChange(searchTerm);
  }

  return (
    <>
      <div className="search-field__container">
        <BaseInput
          className="search-field__input"
          type="text"
          variant="primary"
          placeholder="Input search term"
          value={searchTerm}
          onChange={handleInputChange}
        ></BaseInput>
        <BaseButton
          className="search-field__button"
          variant="primary"
          onClick={handleSearch}
        >
          Search
        </BaseButton>
        <ErrorButton />
      </div>
    </>
  );
};

export default SearchBar;
