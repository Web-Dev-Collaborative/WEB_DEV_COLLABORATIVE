import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Setting Up Router
import { BrowserRouter } from "react-router-dom";

// Setting Up Redux
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

import thunk from "redux-thunk";

import mainReducer from "./store/reducers/mainReducer";
import levelsReducer from "./store/reducers/levelsReducer";
import languagesReducer from "./store/reducers/languagesReducer";
import gameLevelReducer from "./store/reducers/gameLevelReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  mainReducer: mainReducer,
  levelsReducer: levelsReducer,
  languagesReducer: languagesReducer,
  gameLevelReducer: gameLevelReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
