import { createStore } from "redux";
import rootReducer from "../reducers";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const composeEnhancers = composeWithDevTools({
  serialize: true,
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const middlewares = [thunk];
const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(...middlewares))
);

export { store };
