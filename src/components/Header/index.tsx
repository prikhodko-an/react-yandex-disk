import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { logout } from '../../services/auth/actions';
import { selectAuth } from '../../services/auth/selectors';
import { IAuthState } from '../../services/auth/models';

import logo from './public/logo.svg';
import styles from './index.module.scss';

interface IStateProps {
  auth: IAuthState;
}

interface IDispatchProps {
  logout: () => void;
}

interface IProps extends IStateProps, IDispatchProps {}

const Header = ({
  auth: { user, isAuthenticated },
  logout: userLogout,
}: IProps) => {
  const onLogout = () => {
    localStorage.removeItem('yandexAuthToken');
    userLogout();
  };

  return (
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
            <Button onClick={onLogout}>Выход</Button>
          </div>
        )}
      </Container>
    </header>
  );
};

const mapStateToProps = createStructuredSelector<any, IStateProps>({
  auth: selectAuth,
});

const mapDispatchToProps = {
  logout,
};

export default connect<IStateProps, IDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Header);
