import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { ThemeProvider } from '@material-ui/core/styles'; 
import { BruniTheme } from './components/bruniTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BruniTheme>
    {/* <ThemeProvider theme={theme}> */}
      <App />
    {/* </ThemeProvider> */}
    </BruniTheme>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
