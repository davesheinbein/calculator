import React from 'react';
import Goo from '../Goo/Goo';
import FallingGoo from '../FallingGoo/FallingGoo';
import CalcImg from '../../images/Calculator.png';
import './styles/IntroAnimation.css';
import { Link } from 'react-router-dom';

function IntroAnimation() {
	return (
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
				<img src={CalcImg} id='calcImg' alt='CalcImg' />
			</div>
			<Link to='/main' className='NavLink'>
				<Goo />
			</Link>

			<FallingGoo />
		</div>
	);
}

export default IntroAnimation;
