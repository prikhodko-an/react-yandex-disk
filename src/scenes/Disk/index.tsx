import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import Spinner from '../../components/Spinner';
import DiskItem from './components/DiskItem';
import { getFolder } from './services/actions';
import { IDiskState, IDiskItem } from './services/models';
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
      folder: { items },
      isLoading,
    } = this.props.disk;

    return (
      <>
        {isLoading ? (
          <Spinner />
        ) : (
          items.map((item: IDiskItem) => (
            <DiskItem item={item} key={item.resource_id} />
          ))
        )}
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
