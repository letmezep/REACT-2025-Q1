import { Component } from 'react';
import SearchField from '../components/SearchField/SearchField';
import ResultList from '../components/ResultList/ResultList';

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
        <SearchField onSearchChange={this.handleSearchChange} />
        <ResultList searchTerm={this.state.searchTerm} />
      </>
    );
  }
}

export default MainPage;
