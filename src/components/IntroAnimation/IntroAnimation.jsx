import React from 'react';
import Goo from '../Goo/Goo';
import './styles/IntroAnimation.css';

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
            <Goo/>
		</div>
	);
}

export default IntroAnimation;
