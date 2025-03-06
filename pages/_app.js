
import { Provider } from 'react-redux';
import { store } from '../components/store/store';
import ErrorBoundary from '../components/ErrorBoundary';
import '../styles/global.css';

const MyApp = ({ Component, pageProps }) => {
    return (
        <Provider store={store}>
            <ErrorBoundary key={pageProps.errorKey}>
                <Component {...pageProps} />
            </ErrorBoundary>
        </Provider>
    );
};

export default MyApp;


// import { Provider } from 'react-redux';
// import { store } from '../components/store/store';
// import ErrorBoundary from '../components/ErrorBoundary';


// import '../styles/global.css'

// const MyApp = ({ Component, pageProps }) => {
//     return (

        
//             <Provider store={store}>
//                 <ErrorBoundary>
//                 <Component {...pageProps} />
//                 </ErrorBoundary>
//             </Provider>
        
//     );
// };

// export default MyApp;