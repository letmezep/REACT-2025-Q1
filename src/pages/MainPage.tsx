import ResultList from '../components/layout/CardList';
import Header from '../components/layout/Header';
import ErrorButton from '../components/ui/ErrorButton';
import { localStorageItem } from '../constants';
import React, { useState } from 'react';

const MainPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState(localStorageItem);

  function handleSearchChange(searchTerm: string) {
    setSearchTerm(searchTerm);
  }

  return (
    <>
      <ErrorButton />
      <Header onSearchChange={handleSearchChange} />
      <ResultList searchTerm={searchTerm} />
    </>
  );
};

export default MainPage;
