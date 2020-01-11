import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import manageArt from './reducers/artreducer'
import thunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker';


const store = createStore(manageArt, window._REDUX_DEVTOOLS_EXTENSION_, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

// Can create store in its own file to clean this up later

serviceWorker.unregister();
