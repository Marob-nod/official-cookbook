import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

import apiMiddleware from '../middlewares/api';
import reducer from '../reducers/index';

const middlewares = [apiMiddleware]

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares))
)

export default store