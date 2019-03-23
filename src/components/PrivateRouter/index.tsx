import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectAuth } from '../../services/auth/selectors';
import { IAuthState } from '../../services/auth/models';

interface IProps {
  component: any;
  auth?: IAuthState;
  path: string;
}

const PrivateRoute = ({ component: Component, auth, ...rest }: IProps) => (
  <Route
    {...rest}
    render={(props) =>
      auth.isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const mapStateToProps = createStructuredSelector<any, any>({
  auth: selectAuth,
});

export default connect(mapStateToProps)(PrivateRoute);
