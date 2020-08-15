import calculationReducer from './calculationReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
	calculation: calculationReducer,
});

export default allReducers;
