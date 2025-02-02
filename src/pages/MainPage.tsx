import { Component } from 'react';
import SearchField from '../components/SearchField/SearchField';
import ResultList from '../components/ResultList/ResultList';
import ErrorButton from '../components/ErrorButton/ErrorButton';
import { localStorageItem } from '../services/constant';

class MainPage extends Component {
  state = {
    searchTerm: localStorageItem,
  };

  handleSearchChange = (searchTerm: string) => {
    this.setState({ searchTerm });
  };
  render() {
    return (
      <>
        <ErrorButton />
        <SearchField onSearchChange={this.handleSearchChange} />
        <ResultList searchTerm={this.state.searchTerm} />
      </>
    );
  }
}

export default MainPage;
