import SearchBar from '../components/SearchBar';
import CardList from '../components/CardList';
import ThemeChangeButton from '../components/ui/ThemeChangeButton';
import { ThemeProvider } from '../components/context/ThemeProvider';
import { useSearchQuery } from '../components/hooks/useSearchQuery';
import Details from '../components/widgets/Details';
import { useRouter } from 'next/router';

const Index = () => {
  const { searchTerm, setSearchTerm } = useSearchQuery();
  const router = useRouter();
  const selectedId = router.query.id as string | undefined;

  const handleSearchUpdate = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
    localStorage.setItem('searchTerm', searchTerm);
  };

  return (
    <>
      <div className="left-panel">
        <ThemeProvider>
          <ThemeChangeButton />
          <SearchBar onSearchChange={handleSearchUpdate} />
          <CardList />
        </ThemeProvider>
      </div>
      <div className="right-panel">
        {selectedId && <Details characterId={selectedId} />}
      </div>
    </>
  );
};

export default Index;
