import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	increment,
	decrement,
	multiply,
	divide,
	clear,
} from '../../actions/index';
import './styles/buttons.css';

function Buttons() {
	const button = useSelector((state) => state.button);
	const dispatch = useDispatch();
	return (
		<div className='calcContainer'>
			<div className='resultsNum'>{button}</div>
			<div className='btnActionContainer'>
				<button onClick={() => dispatch(clear())}>
					Clear
				</button>
				<button onClick={() => dispatch(increment())}>
					+
				</button>
				<button onClick={() => dispatch(decrement())}>
					-
				</button>
				<button onClick={() => dispatch(multiply())}>
					&#215;
				</button>
				<button onClick={() => dispatch(divide())}>
					&#247;
				</button>
			</div>
		</div>
	);
}

export default Buttons;
