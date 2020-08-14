import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	increment,
	decrement,
	multiply,
	divide,
	clear,
} from '../../actions/index';

import clamp from 'lodash-es/clamp';
import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-with-gesture';

import './styles/buttons.css';

// vvvvvvv Change dispatch for all numbers next vvvvvvv


function Buttons() {
	const button = useSelector((state) => state.button);
	const dispatch = useDispatch();

	const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
	const bind = useGesture(({ down, delta, velocity }) => {
		velocity = clamp(velocity, 1, 8);
		set({
			xy: down ? delta : [0, 0],
			config: {
				mass: velocity,
				tension: 500 * velocity,
				friction: 50,
			},
		});
	});

	return (
		<animated.div {...bind()} style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`) }} className='calcContainer'>
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
		</animated.div>
	);
}

export default Buttons;
