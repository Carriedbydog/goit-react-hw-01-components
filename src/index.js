import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import 'modern-normalize';
import { Global } from 'styles/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Global />
  </>
);
