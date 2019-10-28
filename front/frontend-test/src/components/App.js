import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Login from './Login';
import Register from './Register';
import Hello from './Hello';

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
            <Route path="/hello" component={Hello} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;