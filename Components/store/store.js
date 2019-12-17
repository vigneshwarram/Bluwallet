/* eslint-disable */
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import reducers from "../Reducer";

const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk, sagaMiddleware];

const rootReducer = combineReducers({
  ...reducers
});

const initialState = {};

const composedEnhancers = compose(
  applyMiddleware(...middleware)
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

export default {
  store
};
