import { combineReducers } from 'redux';
import { Authentication } from './Authentication';

const rootReducer = combineReducers({
    Authentication: Authentication,
    // other reducers can be added here
});

export default rootReducer;