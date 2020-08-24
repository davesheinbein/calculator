import React from 'react';

import Buttons from '../Buttons/Buttons';
import FinalAnswer from '../FinalAnswer/FinalAnswer';

import clamp from 'lodash-es/clamp';
import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-with-gesture';
import { Container, Row, Col } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/Calculator.css';

const Calculator = (props) => {
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
		<Container>
			<Row>
				<Col xs='auto'>
					<animated.div
						{...bind()}
						style={{
							transform: xy.interpolate(
								(x, y) => `translate3d(${x}px,${y}px,0)`
							),
						}}
						className='calcContainer'>
						<FinalAnswer
							inputExpression={props.inputExpression}
						/>
						<Buttons
							onClick={props.onClick}
							onSubmit={() => {
								props.onSubmit();
							}}
						/>
					</animated.div>
				</Col>
			</Row>
		</Container>
	);
};

export default Calculator;
