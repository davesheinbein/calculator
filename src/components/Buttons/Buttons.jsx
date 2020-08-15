import React from 'react';
import './styles/Buttons.css';

const Buttons = (props) => {
	return (
		<div>
			<section>
				<div className='btnActionContainer'>
					<button
						onClick={() => {
							props.onClick('(');
						}}>
						<span>(</span>
					</button>
					<button
						onClick={() => {
							props.onClick(')');
						}}>
						<span>)</span>
					</button>
					<button
						onClick={() => {
							props.onClick('delete');
						}}>
						<span>Del</span>
					</button>
					<button
						onClick={() => {
							props.onClick('clear');
						}}>
						<span>Clr</span>
					</button>
				</div>
				<div className='btnActionContainer'>
					<button
						onClick={() => {
							props.onClick('7');
						}}>
						<span>7</span>
					</button>
					<button
						onClick={() => {
							props.onClick('8');
						}}>
						<span>8</span>
					</button>
					<button
						onClick={() => {
							props.onClick('9');
						}}>
						<span>9</span>
					</button>
					<button
						onClick={() => {
							props.onClick('/');
						}}>
						<span>&#247;</span>
					</button>
				</div>
				<div className='btnActionContainer'>
					<button
						onClick={() => {
							props.onClick('4');
						}}>
						<span>4</span>
					</button>
					<button
						onClick={() => {
							props.onClick('5');
						}}>
						<span>5</span>
					</button>
					<button
						onClick={() => {
							props.onClick('6');
						}}>
						<span>6</span>
					</button>
					<button
						onClick={() => {
							props.onClick('*');
						}}>
						<span>&#215;</span>
					</button>
				</div>
				<div className='btnActionContainer'>
					<button
						onClick={() => {
							props.onClick('1');
						}}>
						<span>1</span>
					</button>
					<button
						onClick={() => {
							props.onClick('2');
						}}>
						<span>2</span>
					</button>
					<button
						onClick={() => {
							props.onClick('3');
						}}>
						<span>3</span>
					</button>
					<button
						onClick={() => {
							props.onClick('-');
						}}>
						<span>-</span>
					</button>
				</div>
				<div className='btnActionContainer'>
					<button
						onClick={() => {
							props.onClick('0');
						}}>
						<span>0</span>
					</button>
					<button
						onClick={() => {
							props.onClick('.');
						}}>
						<span>.</span>
					</button>
					<button id='evalBtn'
						onClick={() => { props.onSubmit(); }}>
						<span>=</span>
					</button>
					<button
						onClick={() => {
							props.onClick('+');
						}}>
						<span>+</span>
					</button>
				</div>
			</section>
		</div>
	);
};

export default Buttons;
