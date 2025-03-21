import Header from '../components/Header';
import CardList from '../components/widgets/CardList';
import { useSearchQuery } from '../hooks/useSearchQuery';

const MainPage = () => {
  const { searchTerm, setSearchTerm } = useSearchQuery();

  const handleSearchUpdate = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
    localStorage.setItem('searchTerm', searchTerm);
  };

  return (
    <>
      <div className="main-container">
        <Header onSearchChange={handleSearchUpdate} />
        <CardList />
      </div>
    </>
  );
};

export default MainPage;
