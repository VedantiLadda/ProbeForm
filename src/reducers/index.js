import {combineReducers} from 'redux';
import {dashboard} from '../features/dashboard/reducer'
import {login} from '../features/login/reducer';
import {questions} from '../features/questions/reducer';

export const rootReducer = combineReducers({dashboard, login, questions});