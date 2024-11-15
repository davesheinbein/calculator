import React from 'react';
import clamp from 'lodash-es/clamp';
import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-with-gesture';
import './styles/Title.css';

function Title() {
	const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
	const bind = useGesture(({ down, delta, velocity }) => {
		const clampedVelocity = clamp(velocity, 1, 8);
		set({
			xy: down ? delta : [0, 0],
			config: {
				mass: clampedVelocity,
				tension: 500 * clampedVelocity,
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
			className='headingTitle'
		>
			<div className='banner'>Drag Me!</div>
			<h1 className='headingTitle-text'>
				React Redux Calculator
			</h1>
		</animated.div>
	);
}

export default Title;
