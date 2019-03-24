import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

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
    } = this.props.disk;

    return (
      <Container>
        <Card>
          {items.map((item: IDiskItem) => (
            <DiskItem item={item} key={item.resource_id} />
          ))}
        </Card>
      </Container>
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
