import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </StrictMode>
  );
} else {
  console.error('Root element not found');
}
