import { ChangeEvent } from 'react';
import { localStorageItem } from '../../constants';
import { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState(localStorageItem);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  function handleSearch() {
    localStorage.setItem('searchTerm', searchTerm);
  }

  return (
    <>
      <div className="search-field__container">
        <input
          className="search-field__input"
          type="text"
          placeholder={'Input search term'}
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button
          className="search-field__button"
          type="button"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default SearchBar;
