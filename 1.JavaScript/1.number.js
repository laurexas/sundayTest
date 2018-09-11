// Write a function that takes the average of an array of number and returns the nearest whole number.
// Examples:
// number([1, 2]) => 2
// number([2, 4]) => 3
// number([23, 18, 1, 1, 1, 1]) => 8
// number([1, 2, 3, 4, 5]) => 3


var sum = 0;
export function number(numbers) {
    if(numbers.length) {
        sum = numbers.reduce(function(a,b) {
            return a+b
        });
        answer = Math.round(sum/numbers.length);
    }
    return answer;
}