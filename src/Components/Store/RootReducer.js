import { combineReducers } from 'redux';
import dateReducer from './Reducers/DateReducer';

const rootReducer = combineReducers({
  dates: dateReducer,
});

export default rootReducer;