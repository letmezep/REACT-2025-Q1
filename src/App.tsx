import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import MainPage from './pages/MainPage';
import FormUncontrolComp from './pages/FormUncontrolComp';
import FormHook from './pages/FormHook';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="FormUncontrolComp" element={<FormUncontrolComp />} />
        <Route path="FormHook" element={<FormHook />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
