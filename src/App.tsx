import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Disk from './scenes/Disk';
import Login from './scenes/Login';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/disk" component={Disk} />
        <Redirect to="/login" />
      </Switch>
    );
  }
}

export default App;
