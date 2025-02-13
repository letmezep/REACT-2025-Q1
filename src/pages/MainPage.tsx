// import { useState } from 'react';
// import ResultList from '../components/layout/CardList';
import Header from '../components/layout/Header';
import ErrorButton from '../components/common/ErrorButton';
import CardList from '../components/widgets/CardList';
// import Card from '../components/widgets/Card';
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
      <CardList />
      {/* <Card /> */}
      {/* <ResultList searchTerm={searchTerm} /> */}
    </>
  );
};

export default MainPage;
