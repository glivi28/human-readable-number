module.exports = function toReadable(number) {
	const a = ['zero', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
	const b = ['', '', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];

	let result = '';
	let resudie10 = number % 10;


	if (number < 20) {
		result = a[number];
	}

	if (number >= 20 && number < 100) {
		result += !resudie10 ? b[number / 10 + 1] : b[Math.ceil(number / 10)] + a[resudie10];
	}

	if (number >= 100) {
		let resudie100 = number % 100;
		console.log(resudie100);
		if (!resudie100) {
			result += a[number / 100] + 'hundred';
		} else if (resudie100 < 20) {
			result += a[Math.floor(number / 100)] + 'hundred ' + a[resudie100];
		} else if (!(resudie100 % 10)) {
			result += a[Math.floor(number / 100)] + 'hundred ' + (b[Math.floor(resudie100 / 10) + 1]);
		} else {
			result += a[Math.floor(number / 100)] + 'hundred ' + (b[Math.ceil(resudie100 / 10)] + a[resudie10]);
		}

	}

	return result.trim();
}
