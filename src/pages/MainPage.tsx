import { useState } from 'react';
import Header from '../components/layout/Header';
import CardList from '../components/widgets/CardList';
import { localStorageItem } from '../constants';

const MainPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState(localStorageItem);

  const handleSearchUpdate = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
    localStorage.setItem('searchTerm', newSearchTerm);
  };

  return (
    <>
      <Header onSearchChange={handleSearchUpdate} />
      <CardList searchTerm={searchTerm} />
    </>
  );
};

export default MainPage;
