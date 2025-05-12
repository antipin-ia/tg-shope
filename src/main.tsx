import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { useTelegram } from './hooks/useTelegram';

const Main = () => {
  try {
    useTelegram();
  } catch (e) {
    console.warn('Telegram WebApp not available:', e);
  }
  return <App />;
};

const rootElement = document.getElementById('root');
if (rootElement) {
  try {
    const root = createRoot(rootElement);
    root.render(
      <StrictMode>
        <Main />
      </StrictMode>
    );
  } catch (error) {
    console.error('Failed to render app:', error);
    rootElement.innerHTML = '<h1>Application Error</h1><p>Please try again later</p>';
  }
}
