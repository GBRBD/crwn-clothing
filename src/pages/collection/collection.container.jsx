import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsSelectionLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinnercomponent';
import CollectionPage from './collection.component';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsSelectionLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
