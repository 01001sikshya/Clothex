import React from 'react';
import { withRouter, Switch } from 'react-router-dom';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import {Home, CategoryProduct, ProductSingle, Cart, Search} from "../pages/index";
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';

const App = () => (
<>
    <PublicRoute exact path="/login" component={Login} />
    <PublicRoute exact path="/signup" component={Signup} />
    <PrivateRoute path="/" component={Home} />
</>
);
export default App;

