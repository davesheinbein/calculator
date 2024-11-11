import React from 'react';
import './styles/Footer.css';

const Footer = () => (
	<footer className='footer'>
		<p>&copy; {new Date().getFullYear()} David Sheinbein</p>
		<div>
			<a
				href='https://davidsheinbeinengineer.com/'
				target='_blank'
				rel='noopener noreferrer'
			>
				Portfolio
			</a>
			{' | '}
			<a
				href='https://github.com/davesheinbein/'
				target='_blank'
				rel='noopener noreferrer'
			>
				GitHub
			</a>
			{' | '}
			<a
				href='https://linkedin.com/in/david-sheinbein'
				target='_blank'
				rel='noopener noreferrer'
			>
				LinkedIn
			</a>
		</div>
	</footer>
);

export default Footer;
