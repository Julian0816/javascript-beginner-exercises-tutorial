//fix this function:
function startCounting() {
	let counter = 101;
	while (counter <= 101) {
		counter--;
		if (counter === -1) break
		console.log(counter);
	}

	return counter == 0;
}

startCounting();