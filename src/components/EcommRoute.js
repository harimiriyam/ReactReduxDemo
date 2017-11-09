import React from 'react';
import {HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './cartStore';
import { MainApp } from './MainApp';
import { PageNotFound } from './PageNotFound';


export default () => (
  <Provider store={store}>
    <div> 
    <Router>
      <Switch>
          <Route exact path="/" component={MainApp}/>
          <Route exact path="/addproduct" component={MainApp}/>
          <Route exact path="/dashboard" component={MainApp}/>
          <Route path="*" component={PageNotFound}/>
      </Switch>
      </Router>
    </div>
  </Provider>
)
