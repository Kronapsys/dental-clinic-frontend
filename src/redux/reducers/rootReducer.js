import {combineReducers} from 'redux';
import userReducer from './userReducer.js';
import appointmentReducer from './appointmentReducer.js';

const rootReducer = combineReducers({
    userReducer,
    appointmentReducer
});

export default rootReducer;