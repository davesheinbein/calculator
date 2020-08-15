// Action types
import { DISPLAY, EVALUATE } from '../actions/index';

// Action creator for displaying expression
export const getDisplayAction = (input) => {
	return {
		type: DISPLAY,
		text: input,
	};
};

// Action creator for evaluating the expression
export const getEvaluateAction = (input) => {
	return {
		type: EVALUATE,
		text: input,
	};
};

export default {
	getDisplayAction,
	getEvaluateAction,
};
