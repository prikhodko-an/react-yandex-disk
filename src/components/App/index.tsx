import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import Header from '../Header';
import PrivateRouter from '../PrivateRouter';
import Disk from '../../scenes/Disk';
import Login from '../../scenes/Login';

import styles from './index.module.scss';

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Container className={styles.content}>
        <Card className={styles.card}>
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRouter path="/disk/:path?" component={Disk} />
            <Redirect to="/disk" />
          </Switch>
        </Card>
      </Container>
    </div>
  );
};

export default App;
