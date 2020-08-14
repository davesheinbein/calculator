import React, { Component } from 'react';
import './App.css';
import Buttons from '../../components/Buttons/Buttons';
import { Spring } from 'react-spring/renderprops';

class App extends Component {
	/*--- State ---*/
	/*--- Handle Methods ---*/
	/*--- Lifecycle Methods ---*/
	render() {
		return (
			<div className='App'>
				<Spring
					from={{ opacity: 0, marginLeft: -2000 }}
					to={{ opacity: 1, marginLeft: 0 }}
					config={{ duration: 2500 }}>
					{(props) => (
						<div style={props}>
							<h1>React Redux Calculator</h1>
						</div>
					)}
				</Spring>
				<Spring
					from={{ opacity: 0, marginRight: -2000 }}
					to={{ opacity: 1, marginRight: 0 }}
					config={{ duration: 2500 }}>
					{(props) => (
						<div style={props}>
							<Buttons />
						</div>
					)}
				</Spring>
			</div>
		);
	}
}
export default App;
