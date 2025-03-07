import SearchBar from '../components/SearchBar';
import CardList from '../components/CardList';
import ThemeChangeButton from '../components/ui/ThemeChangeButton';
import { ThemeProvider } from '../components/context/ThemeProvider';
import { useSearchQuery } from '../components/hooks/useSearchQuery';
import Details from '../components/details/Details';
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
        <h2>right panel</h2>
{/* <Details /> */}
{selectedId ? <Details characterId={selectedId} /> : <p>Select a character</p>}
{/* <Details characterId={selectedId} /> */}
{/* <iframe src={`/details/${selectedId}`} className="details-iframe" /> */}
      </div>
    </>
  );
};

export default Index;

// import MainPage from '../src/pages/MainPage';
// import { Routes, Route } from 'react-router';
// import NotFound from '../src/pages/NotFound';
// import Details from '../src/components/layout/Details';
// import ThemeChangeButton from '../src/components/ui/ThemeChangeButton';
// import { ThemeProvider } from '../src/context/ThemeProvider';
// import './styles/index.css';

// const App: React.FC = () => {
//   return (
//     <ThemeProvider>
//       <ThemeChangeButton />
//       <Routes>
//         <Route path="/" element={<MainPage />}>
//           <Route path="details/:id" element={<Details />} />
//         </Route>

//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </ThemeProvider>
//   );
// };

// export default App;
