import { combineReducers } from 'redux';
import dashboard from '../features/dashboard/reducer';
import login from '../features/login/reducer';
import questions from '../features/questions/reducer';

const rootReducer = combineReducers({ dashboard, login, questions });

export default rootReducer;
