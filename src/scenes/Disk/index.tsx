import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

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
    const { location } = this.props;
    this.props.getFolder(location.pathname.replace('disk', ''));
  }

  render() {
    const {
      folder: { items },
    } = this.props.disk;

    return (
      <div>
        {items.map((item: any) => (
          <div>{item.name}</div>
        ))}
      </div>
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
