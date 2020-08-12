import buttonReducer from './button';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
	button: buttonReducer,
});

export default allReducers;
