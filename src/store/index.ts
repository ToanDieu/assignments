import { createStore, compose, applyMiddleware } from 'redux';

import rootReducer from '../reducers';
import { sagaMiddleWare } from './middleware';
import rootSaga from '../saga';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = process.env.NODE_ENV === 'development' ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose : compose;
const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(sagaMiddleWare)));
sagaMiddleWare.run(rootSaga);

export { store };