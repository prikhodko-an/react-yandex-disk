import React, { PureComponent } from 'react';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { login } from '../../services/auth/actions';
import { selectAuth } from '../../services/auth/selectors';
import { IAuthState } from '../../services/auth/models';
import { APP_CLIENT_ID, YANDEX_OAUTH_URL } from '../../services/config.json';

interface IStateProps {
  auth: IAuthState;
}
interface IDispatchProps {
  login: () => void;
}

interface IProps extends IStateProps, IDispatchProps, RouteComponentProps {}

class Login extends PureComponent<IProps> {
  componentDidMount() {
    if (this.props.location.hash) {
      const token = (/access_token=([^&]+)/ as any).exec(
        document.location.hash
      )[1];
      if (token) {
        localStorage.setItem('yandexAuthToken', token);
        this.props.login();
      }
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated) {
      return <Redirect to="/disk" />;
    }

    return (
      <>
        <Card.Header>Вход</Card.Header>
        <Card.Body>
          <Card.Text>
            Войдите, чтобы просмотреть содержимое вашего Яндекс Диска:
          </Card.Text>
          <Button
            variant="warning"
            href={`${YANDEX_OAUTH_URL}?response_type=token&client_id=${APP_CLIENT_ID}`}
          >
            Вход через Yandex
          </Button>
        </Card.Body>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector<any, IStateProps>({
  auth: selectAuth,
});

const mapDispatchToProps = {
  login,
};

export default connect<IStateProps, IDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Login);
