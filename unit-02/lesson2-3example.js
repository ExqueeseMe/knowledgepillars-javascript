// 1. Operator precedence example:
let result = 5 + 3 * 2;
console.log("5 + 3 * 2 =", result); // 5 + 3 * 2 = 11  (because 3*2 is done first)

result = (5 + 3) * 2;
console.log("(5 + 3) * 2 =", result); // (5 + 3) * 2 = 16 (parentheses changed the order)

// 2. Floating-point quirk (I made my own function to fix the floating point bug.):
floatingPointFix = (equation) => {
	return Math.round(equation * 10) / 10;
};
console.log("0.1 + 0.2 =", floatingPointFix(0.1 + 0.2)); // 0.1 + 0.2 = 0.30000000000000004
console.log(floatingPointFix(0.1 + 0.7));
// 3. Using Math object functions:
console.log("Random number 0-1:", Math.random());
console.log("Random 0-10:", Math.random() * 10);
console.log("Random 0-9 (int):", Math.floor(Math.random() * 10)); // 0 to 9, integer
console.log("Dice roll (1-6):", Math.floor(Math.random() * 6) + 1); // 1 to 6, int

console.log("Round 4.7:", Math.round(4.7)); // 5
console.log("Floor 4.7:", Math.floor(4.7)); // 4
console.log("Ceil 4.1:", Math.ceil(4.1)); // 5

console.log("Max of 8, 3, 12:", Math.max(8, 3, 12)); // 12
console.log("2^5 =", Math.pow(2, 5)); // 32 (2 to the power of 5)
console.log("Square root of 16 =", Math.sqrt(16)); // 4

// 4. Increment/Decrement demo:
let x = 10;
console.log("x is equal to", x); // x after x++ is 11

addToX = () => {
	x++;
	console.log("1 has been added to X, so now X is equal to", x);
};

addToX();
addToX();
addToX();
addToX();
