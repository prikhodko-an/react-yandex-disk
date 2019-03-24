import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Disk from './scenes/Disk';
import Login from './scenes/Login';
import PrivateRouter from './components/PrivateRouter';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRouter path="/disk/:path?" component={Disk} />
        <Redirect to="/disk" />
      </Switch>
    </>
  );
};

export default App;
