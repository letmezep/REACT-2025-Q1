
import { Provider } from 'react-redux';
import { store } from '../components/store/store';
// import { ThemeProvider } from '../src/context/ThemeProvider';

import '../styles/global.css'

const MyApp = ({ Component, pageProps }) => {
    return (
        // <ThemeProvider>
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
        // </ThemeProvider>
    );
};

export default MyApp;