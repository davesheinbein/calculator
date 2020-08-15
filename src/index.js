import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App/App';
import calculationReducer from './reducers/calculationReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';

const store = createStore(
	calculationReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ &&
		window.__REDUX_DEVTOOLS_EXTENSION__()
);

const renderCalculator = () => {
	ReactDOM.render(
		// Provider to bind the store with the container
		<Router>
		<React.StrictMode>
			<Provider store={store}>
			<Route render={({ history }) => <App history={history} />} />
			</Provider>
		</React.StrictMode>
		</Router>,
		document.getElementById('root')
	);
};

store.subscribe(() => {
	renderCalculator();
});

renderCalculator();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
