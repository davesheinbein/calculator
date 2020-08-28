export const calculationReducer = (state = '0', action) => {
	let newState = action.text;
	console.log('action.text', action.text);
	switch (action.type) {
		case 'EVALUATE':
			try {
				// Evaluate the final expression and return the result to store
				return eval(newState).toString();
			} catch (error) {
				console.log('Error >>>> ' + error);
				console.log('Error.stack >>>> ' + error.stack);
				console.log('Error.type >>>> ' + error.type);
				alert(
					`Invalid Syntax - Please try again - No hanging brackets ) ( or improper use of decimal points . allowed - Rest to zero`
				);
				return (state = '0');
			}
		case 'DISPLAY':
			// Save and display the text of the action to store
			return newState;
		default:
			// return the old state as is for any undefined case
			return state;
	}
};

export default calculationReducer;
