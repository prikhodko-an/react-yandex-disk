import React from 'react';
import { Link } from 'react-router-dom';

import { IDiskItem } from '../../services/models';
import folder from './public/folder.svg';
import styles from './index.module.scss';

interface IProps {
  item: IDiskItem;
}

const DiskItem = ({ item }: IProps) => {
  let content;

  if (item.type === 'dir') {
    const path = item.path.replace('disk:', '/disk');
    content = (
      <Link to={path} className={styles.item}>
        <img className={styles.folderIcon} src={folder} alt="Папка" />
        <div className={styles.itemInfo}>{item.name}</div>
      </Link>
    );
  } else {
    content = (
      <div className={styles.item}>
        {item.preview && (
          <img
            className={styles.previewImg}
            src={item.preview}
            alt={item.name}
          />
        )}
        <div className={styles.itemInfo}>{item.name}</div>
      </div>
    );
  }

  return content;
};

export default DiskItem;
