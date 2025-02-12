// import { useState } from 'react';
// import ResultList from '../components/layout/CardList';
import Header from '../components/layout/Header';
import ErrorButton from '../components/common/ErrorButton';
// import { localStorageItem } from '../constants';
// import React, { useEffect, useState } from 'react';

const MainPage: React.FC = () => {
  // const [searchTerm, setSearchTerm] = useState(localStorageItem)

  // function handleSearchChange(searchTerm: string) {
  //   setSearchTerm(searchTerm);
  // }

  return (
    <>
      <ErrorButton />
      <Header />
      {/* <ResultList searchTerm={searchTerm} /> */}
    </>
  );
};

export default MainPage;
