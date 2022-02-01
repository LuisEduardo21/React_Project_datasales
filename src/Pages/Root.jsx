import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import StoreProvider from '../components/Store/Provider'
import RoutesPrivate from '../components/Routes/Private/Private';
import Home from './Home/Home';
import Login from './Login/Login';
import UserCrud from '../components/User/Users';
import { NotificationContainer } from 'react-notifications';

const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Switch>
      <Route path="/login" component={Login} />
      <Route path="/users" component={UserCrud} />
      <RoutesPrivate path="/" component={Home} />

     </Switch>
      < NotificationContainer />
    </StoreProvider>
  </Router>
)


export default PagesRoot;