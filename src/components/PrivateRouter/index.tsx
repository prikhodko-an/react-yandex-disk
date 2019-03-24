import React from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectAuth } from '../../services/auth/selectors';
import { IAuthState } from '../../services/auth/models';

interface IProps extends RouteComponentProps {
  component: React.ComponentClass<RouteComponentProps>;
  auth: IAuthState;
  path: string;
}

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated },
  location: { pathname },
  ...rest
}: Partial<IProps>) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
        <Component {...props} key={pathname} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

const mapStateToProps = createStructuredSelector<any, any>({
  auth: selectAuth,
});

export default connect(mapStateToProps)(PrivateRoute);
