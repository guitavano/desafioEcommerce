import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Checkout from './Pages/Checkout';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/checkout' component={Checkout} />
            </Switch>
        </BrowserRouter>
    )
}