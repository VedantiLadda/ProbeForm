import React, {Fragment} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Login from './features/login/components/LoginCard';
import Dashboard from './features/dashboard';
export default function Router(){
    return(
        <BrowserRouter>
            <Route exact path='/' component={Login}/>
            <Route exact path='/dashboard' component={Dashboard}/>
        </BrowserRouter>
    )
}