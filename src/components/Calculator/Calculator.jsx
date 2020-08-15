import React from 'react';

import Buttons from '../Buttons/Buttons';
import FinalAnswer from '../FinalAnswer/FinalAnswer';

import clamp from 'lodash-es/clamp';
import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-with-gesture';

import './styles/Calculator.css';

const Calculator = () => {
	// TO make grabable
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
		<animated.div
			{...bind()}
			style={{
				transform: xy.interpolate(
					(x, y) => `translate3d(${x}px,${y}px,0)`
				),
			}}
			className='calcContainer'>
			<FinalAnswer
				inputExpression={this.props.inputExpression}
			/>
			<Buttons
				onClick={this.props.onClick}
				onSubmit={() => {
					this.props.onSubmit();
				}}
			/>
		</animated.div>
	);
};

export default Calculator;

