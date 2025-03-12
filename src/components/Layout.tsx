import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="FormUncontrolComp">FormUncontrolComp</NavLink>
        <NavLink to="FormHook">FormHook</NavLink>
      </header>

      <Outlet />
    </>
  );
};

export default Layout;
