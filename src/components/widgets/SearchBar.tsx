import { ChangeEvent } from 'react';
import { localStorageItem } from '../../constants';
import { useState } from 'react';
import BaseButton from '../ui/BaseButton';
import BaseInput from '../ui/BaseInput';

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
        {/* <input
          className="search-field__input"
          type="text"
          placeholder={'Input search term'}
          value={searchTerm}
          onChange={handleInputChange}
        /> */}
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
      </div>
    </>
  );
};

export default SearchBar;
