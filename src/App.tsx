import MainPage from './pages/MainPage';
import { Routes, Route } from 'react-router';
import NotFound from './pages/NotFound';
import Details from './components/layout/Details';
import ThemeChangeButton from './components/ui/ThemeChangeButton';
import { ThemeProvider } from './context/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
    <Routes>
      
      <Route path='/' element={<MainPage />}>
        <Route path='details/:id' element={<Details />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    
      
    </Routes>
    <ThemeChangeButton />
    </ThemeProvider>
    
  );
};

export default App;
