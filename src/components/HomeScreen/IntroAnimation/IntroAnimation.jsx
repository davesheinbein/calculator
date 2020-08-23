import React from 'react';
import Goo from '../Goo/Goo';
import FallingGoo from '../FallingGoo/FallingGoo';
import CalcImg from '../../../images/Calculator.png';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/IntroAnimation.css';

function IntroAnimation() {
	return (
		<Container>
			<Row>
				<Col xs='auto'>
					<div className='introContainer'>
						<section>
							<h1>
								<span>C</span>
								<span>A</span>
								<span>L</span>
								<span>C</span>
								<span>U</span>
								<span>L</span>
								<span>A</span>
								<span>T</span>
								<span>O</span>
								<span>R</span>
								<span>CALCULATOR</span>
							</h1>
						</section>
						<div id='container'>
							<Link to='/main' className='NavLink'>
								<img
									src={CalcImg}
									id='calcImg'
									alt='CalcImg'
								/>
							</Link>
						</div>
						<Link to='/main' className='NavLink'>
							<Goo />
						</Link>
						<FallingGoo />
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default IntroAnimation;
