// CalcContainer is the container class for <Calculator />
// that passes the props value to <Calculator /> required for
// presentational components <FinalResult /> and <KeyPad />
import { connect } from 'react-redux';
import {
	getDisplayAction,
	getEvaluateAction,
} from '../calcAction/calcActions';
import Calculator from '../components/CalcScreen/Calculator/Calculator';
import {
	isSuffixAnOperator,
	validateInput,
} from '../validations/validator';

// used to keep track of state in evaluateExpression()
// storeState keeps updating in mapStateToProps()
let storeState = '';

const evaluateExpression = (dispatch) => {
	if (!isSuffixAnOperator(storeState.toString())) {
		dispatch(getEvaluateAction(storeState)); //
	} else if (isSuffixAnOperator(storeState.toString())) {
		dispatch(getEvaluateAction(storeState)); //
	}
};

// returns the value of props, used to map the attribute value
// that will be passed to the presentational component
// 'inputExpression' is the props to
const mapStateToProps = (state) => {
	storeState = state;
	return {
		inputExpression: state,
	};
};

// used to handle those props that either handle click
// events or store dispatch events
const mapDispatchToProps = (dispatch) => {
	return {
		onClick: (text) => {
			let input = storeState.toString();
			// To validate the input being passed
			input = validateInput(input, text);
			console.log(input);
			dispatch(getDisplayAction(input));
		},
		onSubmit: () => {
			evaluateExpression(dispatch);
		},
	};
};

// Connecting container component CalcContainer with
// presentational component Calculator
export const CalcContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Calculator);
