import Header from '../components/Header';
import CardList from '../components/widgets/CardList';
import { useSearchQuery } from '../hooks/useSearchQuery';

const MainPage = () => {
  // const [searchValue, setSearchValue] = useState<string>(localStorage.getItem('searchTerm') || '');
  const { searchTerm, setSearchTerm } = useSearchQuery();

  const handleSearchUpdate = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
    localStorage.setItem('searchTerm', searchTerm);
  };

  return (
    <>
      <Header onSearchChange={handleSearchUpdate} />
      <CardList />
    </>
  );
};

export default MainPage;
