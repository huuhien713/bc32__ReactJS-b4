import { combineReducers } from 'redux';
import { bookingReducer } from './bookingReducer'

const rootReducers = combineReducers({
    bookingReducer : bookingReducer
})

export default rootReducers;