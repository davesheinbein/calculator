import React from 'react';
import { render } from 'react-dom';
import { useTrail, animated } from 'react-spring';
import './styles/Goo.css';

const fast = { tension: 1600, friction: 10 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x, y) =>
	`translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

function Goo() {
	const [trail, set] = useTrail(3, () => ({
		xy: [0, 0],
		config: (i) => (i === 0 ? fast : slow),
	}));
	return (
		<div className='gooContainer'>
			<svg
				style={{
					position: 'absolute',
					width: 0,
					height: 0,
				}}
			>
				<filter id='goo'>
					<feGaussianBlur
						in='SourceGraphic'
						result='blur'
						stdDeviation='30'
					/>
					<feColorMatrix
						in='blur'
						values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7'
					/>
				</filter>
			</svg>
			<div
				className='hooks-main'
				onMouseMove={(e) =>
					set({ xy: [e.clientX, e.clientY] })
				}
			>
				{trail.map((props, index) => (
					<animated.div
						key={index}
						style={{
							transform: props.xy.interpolate(trans),
						}}
					/>
				))}
			</div>
		</div>
	);
}
render(<Goo />, document.getElementById('root'));

export default Goo;
