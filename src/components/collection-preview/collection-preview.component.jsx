import React from 'react';

import './collection-preview.component.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => {
  const loopItems = items
    .filter((item, idx) => idx < 4)
    .map(({ id, ...OtherItemProps }) => (
      <CollectionItem key={id} {...OtherItemProps} />
    ));

  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>{loopItems}</div>
    </div>
  );
};

export default CollectionPreview;
