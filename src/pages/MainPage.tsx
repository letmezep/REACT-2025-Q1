import { Component } from 'react';
import SearchField from '../components/SearchField/SearchField';
import ResultList from '../components/ResultList/ResultList';
import ErrorButton from '../components/ErrorButton/ErrorButton';

class MainPage extends Component {
  state = {
    searchTerm: localStorage.getItem('searchTerm') || '',
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
