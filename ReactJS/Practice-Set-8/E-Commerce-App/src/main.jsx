import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";

import App from './App.jsx'
import './index.css'
import { DataContextProvider, DataContext } from './contexts/DataContext.jsx';

export {DataContext};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </Router>
  </React.StrictMode>
)
