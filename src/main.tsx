import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { useTelegram } from './hooks/useTelegram';

const Main = () => {
  useTelegram();
  return <App />;
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
