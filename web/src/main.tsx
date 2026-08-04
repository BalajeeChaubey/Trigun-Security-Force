import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// @ts-ignore
import AOS from 'aos';
// @ts-ignore
import './index.css' assert { type: 'css' };
import App from './App';

AOS.init({ duration: 1000, once: true, easing: 'ease-out-cubic' });
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
