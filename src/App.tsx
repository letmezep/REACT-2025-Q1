import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import MainPage from './pages/MainPage';
import UnctrlCompForm from './pages/FormUncontrolComp';
import ReactHookForm from './pages/FormHook';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="FormUncontrolComp" element={<UnctrlCompForm />} />
        <Route path="FormHook" element={<ReactHookForm />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
