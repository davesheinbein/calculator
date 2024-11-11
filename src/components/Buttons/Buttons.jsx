import React from 'react';
import './styles/Buttons.css';

// Buttons component renders the calculator buttons and handles click events
const Buttons = (props) => {
	return (
		<div>
			<section>
				<div className='btnActionContainer'>
					<button
						className='calculator-button'
						onClick={() => {
							console.log('Clicked (');
							props.onClick('(');
						}}>
						<span>(</span>
					</button>
					<button
						className='calculator-button'
						onClick={() => {
							console.log('Clicked )');
							props.onClick(')');
						}}>
						<span>)</span>
					</button>
					<button
						className='calculator-button'
						onClick={() => {
							console.log('Clicked Del');
							props.onClick('delete');
						}}>
						<span>Del</span>
					</button>
					<button
						className='calculator-button'
						onClick={() => {
							console.log('Clicked Clr');
							props.onClick('clear');
						}}>
						<span>Clr</span>
					</button>
				</div>
				<div className='btnActionContainer'>
					<button
						className='calculator-button'
						onClick={() => {
							console.log('Clicked 7');
							props.onClick('7');
						}}>
						<span>7</span>
					</button>
					<button
						className='calculator-button'
						onClick={() => {
							console.log('Clicked 8');
							props.onClick('8');
						}}>
						<span>8</span>
					</button>
					<button
						className='calculator-button'
						onClick={() => {
							console.log('Clicked 9');
							props.onClick('9');
						}}>
						<span>9</span>
					</button>
					<button
						className='calculator-button'
						onClick={() => {
							console.log('Clicked /');
							props.onClick('/');
						}}>
						<span>
							<i className='fas fa-divide'></i>
						</span>
					</button>
				</div>
				<div className='btnActionContainer'>
					<button
						className='calculator-button'
						onClick={() => {
							console.log('Clicked 4');
							props.onClick('4');
						}}>
						<span>4</span>
					</button>
					<button
						className='calculator-button'
						onClick={() => {
							console.log('Clicked 5');
							props.onClick('5');
						}}>
						<span>5</span>
					</button>
					<button
						className='calculator-button'
						onClick={() => {
							console.log('Clicked 6');
							props.onClick('6');
						}}>
						<span>6</span>
					</button>
					<button
						className='calculator-button'
						onClick={() => {
							console.log('Clicked *');
							props.onClick('*');
						}}>
						<span>
							<i
								className='fa fa-times'
								aria-hidden='true'></i>
						</span>
					</button>
				</div>
				<div className='btnActionContainer'>
					<button
						className='calculator-button'
						onClick={() => {
							console.log('Clicked 1');
							props.onClick('1');
						}}>
						<span>1</span>
					</button>
					<button
						className='calculator-button'
						onClick={() => {
							console.log('Clicked 2');
							props.onClick('2');
						}}>
						<span>2</span>
					</button>
					<button
						className='calculator-button'
						onClick={() => {
							console.log('Clicked 3');
							props.onClick('3');
						}}>
						<span>3</span>
					</button>
					<button
						className='calculator-button'
						onClick={() => {
							console.log('Clicked -');
							props.onClick('-');
						}}>
						<span>
							<i
								className='fa fa-minus'
								aria-hidden='true'></i>
						</span>
					</button>
				</div>
				<div className='btnActionContainer'>
					<button
						className='calculator-button'
						onClick={() => {
							console.log('Clicked 0');
							props.onClick('0');
						}}>
						<span>0</span>
					</button>
					<button
						className='calculator-button'
						onClick={() => {
							console.log('Clicked .');
							props.onClick('.');
						}}>
						<span>.</span>
					</button>
					<button
						id='evalBtn'
						className='calculator-button'
						onClick={() => {
							console.log('Clicked =');
							props.onSubmit();
						}}>
						<span>
							<i className='fas fa-equals'></i>
						</span>
					</button>
					<button
						className='calculator-button'
						onClick={() => {
							console.log('Clicked +');
							props.onClick('+');
						}}>
						<span>
							<i
								className='fa fa-plus'
								aria-hidden='true'></i>
						</span>
					</button>
				</div>
			</section>
		</div>
	);
};

export default Buttons;
