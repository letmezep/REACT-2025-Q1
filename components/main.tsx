const Main = () => {
  return(
    <div>
      Main Page is Here
    </div>
  );
};

export default Main;

// import { Outlet } from 'react-router';
// import Header from '../components/layout/Header';
// import CardList from '../components/widgets/CardList';
// import { useSearchQuery } from '../hooks/useSearchQuery';

// const MainPage: React.FC = () => {
//   const { searchTerm, setSearchTerm } = useSearchQuery();

//   const handleSearchUpdate = (newSearchTerm: string) => {
//     setSearchTerm(newSearchTerm);
//     localStorage.setItem('searchTerm', searchTerm);
//   };

//   return (
//     <>
//       <div className="main-page__wrapper wrapper">
//         <div className="left-panel">
//           <Header onSearchChange={handleSearchUpdate} />
//           <CardList />
//         </div>

//         <div className="right-panel">
//           <Outlet />
//         </div>
//       </div>
//     </>
//   );
// };

// export default MainPage;
