import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionsOverview from '../../components/collections-overview/collections-overview.components';

import { selectCollections } from '../../redux/shop/shop.selectors.js';

const ShopPage = ({ collections }) => {
  return (
    <div className='shop-page'>
      <CollectionsOverview />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);
