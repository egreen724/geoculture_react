import React from 'react';
import './App.css';
import HeadingContainer from './containers/HeadingContainer'
import ArtworkContainer from './containers/ArtworkContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/about.js'
import SignUp from './components/signup.js'
import LogIn from './components/login.js'


function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <HeadingContainer />
        </div>
        <Route exact path="/about" component={About} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={LogIn} />
        <div className="body">
          <ArtworkContainer/>
        </div>
      </div>

    </Router>

  );
}

export default App;
