import React, { Component } from 'react';
// Components
import Title from '../../components/Title/Title';
import { CalcContainer } from '../../containers/CalcContainer';
import Gesture from '../../components/Headingline/Headingline';
import IntroAnimation from '../../components/IntroAnimation/IntroAnimation';
// React Spring
import { Spring } from 'react-spring/renderprops';
// Routes
import { Route, Switch } from 'react-router-dom';

import './styles/App.css';

class App extends Component {
	/*--- State ---*/
	/*--- Handle Methods ---*/
	/*--- Lifecycle Methods ---*/

	render() {
		return (
			<div className='App'>
				<Switch>
					<Route
						exact
						path='/'
						render={() => (
							<div className='container'>
								<IntroAnimation />
							</div>
						)}
					/>
					<Route
						exact
						path='/main'
						render={() => (
							<div className='container'>
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
											<CalcContainer />
										</div>
									)}
								</Spring>
							</div>
						)}
					/>
				</Switch>
			</div>
		);
	}
}
export default App;
