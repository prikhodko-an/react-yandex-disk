import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { APP_CLIENT_ID } from '../../services/config.json';

import styles from './index.module.scss';

interface IProps extends RouteComponentProps {}

class Login extends PureComponent<IProps> {
  componentDidMount() {
    if (this.props.location.hash) {
      const token = (/access_token=([^&]+)/ as any).exec(
        document.location.hash
      )[1];
    }
  }
  render() {
    return (
      <Container>
        <Card className={styles.card}>
          <Card.Header as="h4">Вход</Card.Header>
          <Card.Body>
            <Card.Text>
              Авторизуйтесь, чтобы просмотреть содержимое вашего Яндекс Диска:
            </Card.Text>
            <Button
              variant="warning"
              href={`https://oauth.yandex.ru/authorize?response_type=token&client_id=${APP_CLIENT_ID}`}
            >
              Аутентификация через Yandex
            </Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Login;
