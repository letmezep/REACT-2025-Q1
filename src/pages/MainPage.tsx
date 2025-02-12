import { Component } from 'react';
import SearchField from '../components/layout/Header';
import ResultList from '../components/layout/CardList';
import ErrorButton from '../components/ui/ErrorButton';
import { localStorageItem } from '../constants';

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
