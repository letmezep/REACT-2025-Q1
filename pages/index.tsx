import Main from '../components/main';

const Index = () => {
  return (
    <>
    <div>
      <h1>Index</h1>
    </div>
    <Main />
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
