import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Disk from './scenes/Disk';
import Login from './scenes/Login';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/disk" component={Disk} />
        <Redirect to="/login" />
      </Switch>
    </>
  );
};

export default App;
