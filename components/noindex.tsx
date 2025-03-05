import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '.';
import ErrorBoundary from '../src/components/common/ErrorBoundary';
import { BrowserRouter } from 'react-router';
import { store } from '../src/store/store';
import { Provider } from 'react-redux';

import './styles/index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </BrowserRouter>
      </Provider>
    </StrictMode>
  );
} else {
  console.error('Root element not found');
}
