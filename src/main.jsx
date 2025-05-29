import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CookiesProvider } from 'react-cookie';
// import './index.css'
import AppRoutes from './routes/AppRoutes';
import './styles/index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CookiesProvider>
      <AppRoutes />
    </CookiesProvider>
  </StrictMode>
);
