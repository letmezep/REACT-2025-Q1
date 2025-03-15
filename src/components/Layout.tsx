import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header className="header">
        <nav className="nav-container">
          <NavLink to="/">Home</NavLink>
          <NavLink to="FormUncontrolComp">FormUncontrolComp</NavLink>
          <NavLink to="FormHook">FormHook</NavLink>
        </nav>
      </header>

      <main className="main-container">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
