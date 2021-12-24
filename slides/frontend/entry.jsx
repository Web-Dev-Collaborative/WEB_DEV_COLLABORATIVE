import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import configureStore from './store/store';
import { addListeners, rehydrateState } from './util/local_storage';

import EditViewContainer from './components/edit/edit_view_container';
import PresentViewContainer from './components/present/present_view_container';
import SplitView from './components/split_view';

import * as actions from './actions';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={SplitView} />
        <Route path="/edit" component={EditViewContainer} />
        <Route path="/present" component={PresentViewContainer} />
      </Switch>
    </HashRouter>
  </Provider>
);

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  rehydrateState(store);
  addListeners(store);
  window.store = store;
  window.actions = actions;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
