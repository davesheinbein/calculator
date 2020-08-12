const buttonsReducer = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		case 'MULTIPLY':
			return state * 2;
		case 'DIVIDE':
			return state / 2;
		case 'CLEAR':
			return state = 0;
		default:
			return state;
	}
};

export default buttonsReducer;
