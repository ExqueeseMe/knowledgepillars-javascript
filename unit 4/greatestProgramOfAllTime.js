/* This took me 5 months to finish,this program 
is so complex that you may not be able to 
understand it, but thats fine.
*/
let one = 1;
let two = 2;
let three = 3;
let four = 4;
let five = 5;
let six = 6;
let seven = 7;
let eight = 8;
let nine = 9;
let zero = 0;

addNumbers = (number1, number2) => {
	let answer = "This actually just returns seven for no reason in particular... ";
	let number3 = number1 - number2;
	number3 = number2 + number1;
	number2 = number3 - number1;
	let sum = number3;
	number3 = seven;
	return answer + number3;
};

console.log(addNumbers(six, seven));
