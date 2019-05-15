import React, {Fragment} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Login from './features/login/components/LoginCard';

export default function Router(){
    return(
        <Route exact path='/' component={Login}/>
    )
}