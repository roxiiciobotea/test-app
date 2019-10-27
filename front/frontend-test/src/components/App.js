import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Login from './Login/Login';
import Register from './Register/Register';

@inject('mobxStore')
@observer
class App extends Component {
  render() {
    return (
      <div className="App-header">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;