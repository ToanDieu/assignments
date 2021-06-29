import { combineReducers } from 'redux';

import foreCast from './forecast';

const rootReducer = combineReducers({
    foreCast
});

export default rootReducer;