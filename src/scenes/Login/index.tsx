import React, { PureComponent } from 'react';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import { login } from '../../services/auth/actions';
import { selectAuth } from '../../services/auth/selectors';
import { IAuthState } from '../../services/auth/models';
import Spinner from '../../components/Spinner';
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
      const token = /access_token=([^&]+)/.exec(document.location.hash)[1];
      if (token) {
        localStorage.setItem('yandexAuthToken', token);
        this.props.login();
      }
    }
  }

  render() {
    const { isAuthenticated, isLoading, error } = this.props.auth;
    if (isAuthenticated) {
      return <Redirect to="/disk" />;
    }

    return (
      <>
        <Card.Header>Вход</Card.Header>
        <Card.Body className="pt-0">
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <Card.Text className="pt-4">
                Войдите, чтобы начать работать с вашим Яндекс Диском:
              </Card.Text>
              <Button
                variant="warning"
                href={`${YANDEX_OAUTH_URL}?response_type=token&client_id=${APP_CLIENT_ID}`}
              >
                Вход
              </Button>
              {error && (
                <Alert variant="danger" className="mt-4">
                  Упс! Что-то пошло не так, попробуйте еще раз.
                </Alert>
              )}
            </>
          )}
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
