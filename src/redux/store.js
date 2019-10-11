// import { createStore, compose } from 'redux';

import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';

import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import { fetchCollectionsStart } from './shop/shop.sagas';
import rootReducer from './root-reducer';

const sagaMiddleWare = createSagaMiddleware();

const middlewares = [sagaMiddleWare];

if (process.env.NODE_ENV === 'development') middlewares.push(logger);

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleWare.run(fetchCollectionsStart);

export const persistor = persistStore(store);

export default { store, persistor };
