import { Outlet } from 'react-router-dom';
import Header from '../Header';

const Layout = () => {
  return (
    <>
      <Header onSearchChange={onSearchChange} />
      <div className="main-container">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
