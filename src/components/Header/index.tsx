import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { selectAuth } from '../../services/auth/selectors';
import { IAuthState } from '../../services/auth/models';

import logo from './public/logo.svg';
import styles from './index.module.scss';

interface IStateProps {
  auth: IAuthState;
}

interface IProps extends IStateProps {}

const Header = ({ auth: { user, isAuthenticated } }: IProps) => (
  <header className={styles.container}>
    <Container className="d-flex justify-content-between align-items-center">
      <Link to="/disk">
        <img className={styles.logo} src={logo} alt="React Yandex Disk" />
      </Link>
      {isAuthenticated && (
        <div className={styles.userData}>
          <div className={styles.userName}>
            {user.real_name ? user.real_name : user.display_name}
          </div>
          <Button>Выход</Button>
        </div>
      )}
    </Container>
  </header>
);

const mapStateToProps = createStructuredSelector<any, IStateProps>({
  auth: selectAuth,
});

export default connect<IStateProps, {}>(
  mapStateToProps,
  {}
)(Header);
