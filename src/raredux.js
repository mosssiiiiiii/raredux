import * as redux from "redux";
import {
  connect as reactReduxConnect,
  Provider as reactReduxProvider,
} from "react-redux";

const connect = reactReduxConnect;
const Provider = reactReduxProvider;
const applyMiddleware = redux.applyMiddleware;
const comose = react.comose;

//store object
var store;

//reducer
const reducer = function reducer(typeName, dState) {
  return function (state = dState, action) {
    switch (action.type) {
      case typeName:
        return action.state;
      default:
        return state;
    }
  };
};
