import React, { useState, ChangeEvent } from 'react';
import { useSearchParams } from 'react-router';
import BaseButton from '../ui/BaseButton';
import BaseInput from '../ui/BaseInput';

const SearchBar: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(
    searchParams.get('search') || ''
  );

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function handleSearch() {
    setSearchParams({ search: inputValue, page: '1' });
  }

  return (
    <div className="search-field__container">
      <BaseInput
        className="search-field__input"
        type="text"
        variant="primary"
        placeholder="Input search term"
        value={inputValue}
        onChange={handleInputChange}
      />
      <BaseButton
        className="search-field__button"
        variant="primary"
        onClick={handleSearch}
      >
        Search
      </BaseButton>
    </div>
  );
};

export default SearchBar;
