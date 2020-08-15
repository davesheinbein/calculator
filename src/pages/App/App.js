import React, { Component } from 'react';
import './App.css';
// Components
import Title from '../../components/Title/Title';
import { CalculatorContainer } from '../../containers/calculatorContainer';
import Gesture from '../../components/Headingline/Headingline';
// React Spring
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
							<Title />
							<Gesture />
						</div>
					)}
				</Spring>
				<Spring
					from={{ opacity: 0, marginRight: -2000 }}
					to={{ opacity: 1, marginRight: 0 }}
					config={{ duration: 2500 }}>
					{(props) => (
						<div style={props}>
							<CalculatorContainer />
						</div>
					)}
				</Spring>
			</div>
		);
	}
}
export default App;
