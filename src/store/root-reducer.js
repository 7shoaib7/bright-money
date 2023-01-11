import { combineReducers } from 'redux';
import billReducers from './bill/bill.reducer';

const rootReducer = combineReducers({
    bills: billReducers
})

export default rootReducer