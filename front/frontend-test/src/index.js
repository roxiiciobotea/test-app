import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';

import Login from './components/Login/Login';
// import Register from './components/Register/Register';

import MobxStore from './stores/mobxStore';
import { Provider } from "mobx-react";

const App = function () {
  return (
    <Provider mobxStore={MobxStore}>
      <div className="App">
        <header className="App-header">
          <Login />
          {/* <Register /> */}
        </header>
      </div>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
