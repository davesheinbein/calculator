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

// vvvvvvv Change dispatch for all numbers next vvvvvvv

function Buttons() {
	const button = useSelector((state) => state.button);
	const dispatch = useDispatch();
	return (
		<div className='calcContainer'>
			<div className='resultsContainer'>
				<div className='resultsNum'>{button}</div>
			</div>
			<div className='btnActionContainer'>
				<button onClick={() => dispatch(decrement())}>
					(
				</button>
				<button onClick={() => dispatch(multiply())}>
					)
				</button>
				<button onClick={() => dispatch(divide())}>
					%
				</button>
				<button onClick={() => dispatch(clear())}>
					Clear
				</button>
			</div>
			<div className='btnActionContainer'>
				<button onClick={() => dispatch(increment())}>
					7
				</button>
				<button onClick={() => dispatch(decrement())}>
					8
				</button>
				<button onClick={() => dispatch(multiply())}>
					9
				</button>
				<button onClick={() => dispatch(divide())}>
					&#247;
				</button>
			</div>
			<div className='btnActionContainer'>
				<button onClick={() => dispatch(increment())}>
					4
				</button>
				<button onClick={() => dispatch(decrement())}>
					5
				</button>
				<button onClick={() => dispatch(divide())}>
					6
				</button>
				<button onClick={() => dispatch(multiply())}>
					&#215;
				</button>
			</div>
			<div className='btnActionContainer'>
				<button onClick={() => dispatch(increment())}>
					1
				</button>
				<button onClick={() => dispatch(multiply())}>
					2
				</button>
				<button onClick={() => dispatch(divide())}>
					3
				</button>
				<button onClick={() => dispatch(decrement())}>
					-
				</button>
			</div>
			<div className='btnActionContainer'>
				<button onClick={() => dispatch(decrement())}>
					0
				</button>
				<button onClick={() => dispatch(multiply())}>
					.
				</button>
				<button onClick={() => dispatch(divide())}>
					=
				</button>
				<button onClick={() => dispatch(increment())}>
					+
				</button>
			</div>
		</div>
	);
}

export default Buttons;
