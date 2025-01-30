import { Component, ReactNode } from 'react';

class SearchField extends Component {
  render(): ReactNode {
    const onClickSearch = () => {
      console.log('Button is pressed');
    };

    return (
      <>
        <div>SearchField Component Is Here</div>
        <div className="search-field__container">
          <input
            className="search-field__input"
            type="text"
            placeholder="Search input"
          />
          <button
            className="search-field__button"
            type="button"
            onClick={onClickSearch}
          >
            Search
          </button>
        </div>
      </>
    );
  }
}

export default SearchField;
