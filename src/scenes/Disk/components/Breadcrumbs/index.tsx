import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  path: string;
}

const Breadcrumbs = ({ path }: IProps) => {
  // get breadcrumb items array
  const pathItems = path.split('/').filter((item) => item !== '');

  const renderItem = (item: string, index: number) => {
    // calculate breadcrumb item link
    const link = `/${pathItems.slice(0, index + 1).join('/')}`;

    // calculate breadcrumb item name
    const itemName = item === 'disk' ? 'Файлы' : item;

    // check if last item
    const isLastItem = index === pathItems.length - 1;

    let itemClass = 'breadcrumb-item';

    // if last breadcrumb item add active class
    if (isLastItem) {
      itemClass += ' active';
    }

    return (
      <li className={itemClass} key={link}>
        {!isLastItem ? <Link to={link}>{itemName}</Link> : itemName}
      </li>
    );
  };

  return (
    <nav>
      <ol className="breadcrumb mb-0 p-0 bg-transparent">
        {pathItems.map(renderItem)}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
