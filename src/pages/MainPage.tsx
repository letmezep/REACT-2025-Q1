import { Component } from 'react';
import SearchField from '../components/SearchField/SearchField';
import ResultList from '../components/ResultList/ResultList';

class MainPage extends Component {
  render() {
    return (
      <>
        <SearchField />
        <ResultList />
      </>
    );
  }
}

export default MainPage;
