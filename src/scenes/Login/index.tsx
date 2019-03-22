import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { login } from '../../services/auth/actions';
import { APP_CLIENT_ID } from '../../services/config.json';

import styles from './index.module.scss';

interface IDispatchProps {
  login: () => void;
}

interface IProps extends IDispatchProps, RouteComponentProps {}

class Login extends PureComponent<IProps> {
  componentDidMount() {
    if (this.props.location.hash) {
      const token = (/access_token=([^&]+)/ as any).exec(document.location.hash)[1];
      if (token) {
        localStorage.setItem('yandexAuthToken', token);
        this.props.login();
      }
    }
  }

  render() {
    return (
      <Container>
        <Card className={styles.card}>
          <Card.Header as="h4">Вход</Card.Header>
          <Card.Body>
            <Card.Text>Войдите, чтобы просмотреть содержимое вашего Яндекс Диска:</Card.Text>
            <Button
              variant="warning"
              href={`https://oauth.yandex.ru/authorize?response_type=token&client_id=${APP_CLIENT_ID}`}
            >
              Вход через Yandex
            </Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  login,
};

export default connect<{}, IDispatchProps>(
  null,
  mapDispatchToProps
)(Login);
