import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import Card from 'react-bootstrap/Card';

import Spinner from '../../components/Spinner';
import List from './components/List';
import Breadcrumbs from './components/Breadcrumbs';
import { getFolder } from './services/actions';
import { IDiskState } from './services/models';
import { selectDisk } from './services/selectors';

interface IStateProps {
  disk: IDiskState;
}
interface IDispatchProps {
  getFolder: (path: string) => void;
}

interface IProps extends IStateProps, IDispatchProps, RouteComponentProps {}

class Disk extends PureComponent<IProps> {
  componentDidMount() {
    const {
      location: { pathname },
    } = this.props;
    // get current location and send a request to API
    const path = pathname === '/disk' ? '/' : pathname.replace('/disk', '');
    this.props.getFolder(path);
  }

  render() {
    const {
      disk: {
        folder: { items },
        isLoading,
        error,
      },
      location: { pathname },
    } = this.props;

    return (
      <>
        <Card.Header>
          <Breadcrumbs path={pathname} />
        </Card.Header>
        {isLoading ? <Spinner /> : <List items={items} error={error.message} />}
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector<any, IStateProps>({
  disk: selectDisk,
});

const mapDispatchToProps = {
  getFolder,
};

export default connect<IStateProps, IDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Disk);
