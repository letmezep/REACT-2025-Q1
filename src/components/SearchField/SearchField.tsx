import { Component, ReactNode } from 'react';

class SearchField extends Component {
  render(): ReactNode {
    let inputTerm: string = '';

    const savedTerm: string =
      localStorage.getItem('searchTerm') || 'fallback term';

    const clickSearchButton = () => {
      console.log('Button is pressed');
      console.log('clickSearchButton:', savedTerm);
      if (inputTerm != '') {
        localStorage.setItem('searchTerm', inputTerm);
      }
    };

    const clickInputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log('Input:', event?.target.value);
      inputTerm = event?.target.value;
    };

    return (
      <>
        <div>SearchField Component Is Here</div>
        <div className="search-field__container">
          <input
            className="search-field__input"
            type="text"
            placeholder={savedTerm}
            onChange={clickInputSearch}
          />
          <button
            className="search-field__button"
            type="button"
            onClick={clickSearchButton}
          >
            Search
          </button>
        </div>
      </>
    );
  }
}

export default SearchField;
