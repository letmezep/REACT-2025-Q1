import { ChangeEvent, Component, ReactNode } from 'react';
import { SearchFieldProps } from '../../services/interfaces';

class SearchField extends Component<SearchFieldProps> {
  state = {
    inputTerm: this.props.searchTerm,
  };

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputTerm: event.target.value });
    console.log('Input:', event?.target.value);
  };

  handleSearch = () => {
    console.log('Search:', this.state.inputTerm);
    localStorage.setItem('searchTerm', this.state.inputTerm);
  };
  render(): ReactNode {
    const savedTerm: string = localStorage.getItem('searchTerm') || '';

    return (
      <>
        <div>SearchField Component Is Here</div>
        <div className="search-field__container">
          <input
            className="search-field__input"
            type="text"
            onChange={this.handleInputChange}
            placeholder={savedTerm || 'Input search term'}
          />
          <button
            className="search-field__button"
            type="button"
            onClick={this.handleSearch}
          >
            Search
          </button>
        </div>
      </>
    );
  }
}

export default SearchField;
