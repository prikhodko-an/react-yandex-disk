import React from 'react';
import Alert from 'react-bootstrap/Alert';

import { IDiskItem } from '../../services/models';
import Item from '../Item';

import styles from './index.module.scss';

interface IProps {
  items: IDiskItem[];
  error: string;
}

const List = ({ items, error }: IProps) => {
  return (
    <>
      {!!error ? (
        <Alert variant="danger" className={styles.alert}>
          {error}
        </Alert>
      ) : (
        items.map((item: IDiskItem) => (
          <Item item={item} key={item.resource_id} />
        ))
      )}
    </>
  );
};

export default List;
