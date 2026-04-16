console.log("Heres all the even numbers until 26:");
for (let i = 1; i <= 26; i++) {
	if (i % 2 !== 0) {
		continue;
	}
	console.log(i);
}
let n = 1;
for (let i = 1; i <= 10; i++) {
	n *= i;
	console.log(i + "! = " + n);
}

for (let i = 1; i <= 10000; i++) {
	let root = Math.sqrt(i);
	if (!Number.isInteger(root)) {
		continue;
	}
	console.log(i + " = " + root + " x " + root);
}

while (true) {
	let input = prompt('Whats the password? (Type "QUIT" to quit)');
	if (input === null || "") {
		break;
	}
	if (input === "QUIT") {
		console.log("Goodbye!");
		break;
	}
	if (input === "ThePassword123") {
		console.log("Password entered correctly!");
		break;
	} else {
		console.log("Wrong password!");
		continue;
	}
}
const numbers = [12, 7, 22, 5, 18, 30, 15];

if (numbers.length === 0) {
	console.log("No numbers to analyze.");
} else {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	const average = sum / numbers.length;

	let countAbove = 0;
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] > average) {
			countAbove++;
		}
	}

	listNumbersInArray = () => {
		return numbers.join(", ");
	};

	console.log("Numbers:", listNumbersInArray());
	console.log("Average:", average);
	console.log("Count above average:", countAbove);
}
