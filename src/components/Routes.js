import React from 'react';
import Home from "./pages/Home";
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';

const Routes = () => (
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
    </Switch>
);
export default Routes;