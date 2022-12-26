import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ClientDetail from './pages/ClientDetail';
import ClientList from './pages/ClientList';
import ClientOrderList from './pages/ClientOrderList';
import ClientPortfolio from './pages/ClientPortfolio';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ClientList} />
    <Route path="/client-detail" component={ClientDetail} />
    <Route path="/client-order-list" component={ClientOrderList} />
    <Route path="/client-portfolio" component={ClientPortfolio} />
  </Switch>
);

export default Routes;
