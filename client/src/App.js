import React from 'react';
import './App.css';
import HeadingContainer from './containers/HeadingContainer'
import ArtworkContainer from './containers/ArtworkContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/about.js'
import Login from './components/login.js'


function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <HeadingContainer />
        </div>
        <div className="body">
          <ArtworkContainer/>
        </div>
      </div>
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </Router>

  );
}

export default App;
