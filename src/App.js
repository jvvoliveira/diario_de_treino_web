import React from 'react';
import { Router } from "react-router-dom";

import "./config/ReactotronConfig";
import Routes from "./routes";
import history from "./services/history";

function App() {
  return (
    <div className='App'>
      <Router history={history}>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
