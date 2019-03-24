import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route, Switch, Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import { selectAuth } from '../../services/auth/selectors';
import { IAuthState } from '../../services/auth/models';
import Header from '../Header';
import PrivateRouter from '../PrivateRouter';
import Spinner from '../Spinner';
import Disk from '../../scenes/Disk';
import Login from '../../scenes/Login';

import styles from './index.module.scss';

interface IStateProps {
  auth: IAuthState;
}

const App = ({ auth: { isRestoreCurrentUser } }: IStateProps) => {
  return (
    <div className={styles.container}>
      {isRestoreCurrentUser ? (
        <Spinner />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector<any, IStateProps>({
  auth: selectAuth,
});

export default connect<IStateProps, {}>(mapStateToProps)(App);
