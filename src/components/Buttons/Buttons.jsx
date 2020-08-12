import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, multiply, divide } from '../../actions/index';

function Buttons() {
	const button = useSelector((state) => state.button);
	const dispatch = useDispatch();
	return (
		<div>
			<div>Num: {button}</div>
			<button onClick={() => dispatch(increment())}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>
			<button onClick={() => dispatch(multiply())}>*</button>
			<button onClick={() => dispatch(divide())}>/</button>
		</div>
	);
}

export default Buttons;
