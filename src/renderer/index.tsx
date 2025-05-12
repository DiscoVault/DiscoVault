import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from '../reportWebVitals';

const elm = document.getElementById('root') as HTMLElement

const root = ReactDOM.createRoot(
    elm
);

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);