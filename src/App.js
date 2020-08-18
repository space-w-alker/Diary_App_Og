import React from 'react';
import {CssBaseline} from '@material-ui/core'
import LoginPage from './pages/login';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <CssBaseline/>
      <div className="App">
        <LoginPage/>
      </div>
    </React.Fragment>
  );
}

export default App;
