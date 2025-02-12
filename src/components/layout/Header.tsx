import { ChangeEvent, Component, ReactNode } from 'react';
import { SearchFieldProps } from '../../types.ts/interfaces';
import { localStorageItem } from '../../constants';
import '../../styles/SearchField.css';
import '../../styles/variables.css';

class Header extends Component<SearchFieldProps> {
  state = {
    searchTerm: localStorageItem,
  };

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSearch = () => {
    const { searchTerm } = this.state;
    this.props.onSearchChange(searchTerm);
    localStorage.setItem('searchTerm', searchTerm);
  };
  render(): ReactNode {
    const savedTerm: string = localStorageItem;

    return (
      <>
        <div className="search-field__container">
          <input
            className="search-field__input"
            type="text"
            placeholder={savedTerm || 'Input search term'}
            onChange={this.handleInputChange}
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

export default Header;
