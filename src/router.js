import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './features/login/components/LoginCard';
import Modal from './sharedComponents/Modal/index';
import FunctionalityCard from './features/dashboard/components/FunctionalityCard';

export default function Router() {
    return (<BrowserRouter>
        <Route exact path='/' component={Login} />

        <Route exact path='/modal' component={Modal} />

        <Route exact path='/functionality' component={FunctionalityCard} />
    </BrowserRouter>

    )
}