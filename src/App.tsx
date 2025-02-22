import MainPage from './pages/MainPage';
import { Routes, Route } from 'react-router';
import NotFound from './pages/NotFound';
import Details from './components/layout/Details';
import ThemeChangeButton from './components/ui/ThemeChangeButton';
import { ThemeProvider } from './context/ThemeProvider';
import './styles/index.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ThemeChangeButton />
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="details/:id" element={<Details />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </ThemeProvider>
  );
};

export default App;
