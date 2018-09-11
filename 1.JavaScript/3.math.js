// Write a function which
//     Multiplies each number by itself.
//     Add them all together.
//     Take the square root of the result.
//     Divide by two.
//     Example
// math(65, 60, 75, 55, 60, 63, 64, 45) === 86

export function math(...numbers) {
    var arr = [...numbers];
    var sum = 0;
    arr.forEach(function (item) {
        sum += item * item;
    });
    return Math.floor(Math.sqrt(sum) / 2);
}
