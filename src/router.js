import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './features/login/components/LoginCard';

import Dashboard from './features/dashboard';
import Modal from './sharedComponents/Modal/index';
import FunctionalityCard from './features/dashboard/components/Functionality Card/FunctionalityCard';
import reviewQuestions from './features/questions/components/QuestionCard';


const Router = () => {
    return (
        <BrowserRouter>
            <Route exact path='/' component={Login}/>
            <Route exact path='/dashboard' component={Dashboard}/>
        </BrowserRouter>
    )
}
export default Router;


