const operators = ['+', '-', '*', '/'];

export const isSuffixAnOperator = (str) => {
	return operators.some((operator) =>
		str.endsWith(operator)
	);
};

const isSuffixZero = (input) => {
	return input.charAt(input.length - 1) === '0';
};

const replaceCharacter = (inputString, newCharacter) => {
	return (
		inputString.slice(0, inputString.length - 1) +
		newCharacter
	);
};

export const validateInput = (input, text) => {
	if (input === 'Infinity' || (input.length === 1 && (input === '0' || isSuffixAnOperator(input)))) {
		input = '';
	}
	switch (text) {
		case 'delete':
			input = input.length <= 1 ? '0' : input.slice(0, -1);
			break;
		case 'clear':
			input = '0';
			break;
		default:
			if (isSuffixAnOperator(input) && isSuffixAnOperator(text)) {
				return replaceCharacter(input, text);
			}
			if (isSuffixZero(input) && isSuffixAnOperator(input.charAt(input.length - 2))) {
				return replaceCharacter(input, text);
			}
			input += text;
	}
	return input;
};
