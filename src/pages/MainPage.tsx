import Header from '../components/layout/Header';
import CardList from '../components/widgets/CardList';
import { useSearchQuery } from '../hooks/useSearchQuery';

const MainPage: React.FC = () => {
  const { searchTerm, setSearchTerm } = useSearchQuery();

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
