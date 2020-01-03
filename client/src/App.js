import React from 'react';
import './App.css';
import HeadingContainer from './containers/HeadingContainer'
import ArtworkContainer from './containers/ArtworkContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/about.js'
import MyList from './components/mylist.js'



function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <HeadingContainer />
        </div>
        <Route exact path="/about" component={About} />
        <Route exact path="/mylist" component={MyList} />
        <div className="body">
          <Route exact path="/" component={ArtworkContainer} />

        </div>
      </div>

    </Router>

  );
}

export default App;
