import MainPage from './pages/MainPage';
import { Routes, Route } from 'react-router';
import NotFound from './pages/NotFound';
import Details from './components/layout/Details';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route path="details/:id" element={<Details />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
