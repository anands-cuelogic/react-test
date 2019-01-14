import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "babel-polyfill";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";

import { rootSaga } from "../sagas/saga";

import reducer from "../store/reducer";
import imageReducer from "../store/imageReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  add: reducer,
  imageReducer: imageReducer
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
