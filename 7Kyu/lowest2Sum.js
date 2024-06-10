/*

https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript


Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

*/

function sumTwoSmallestNumbers(numbers) {
    var lowest1 = numbers[0];
    var lowest2 = numbers[1];
    for(let i = 2; i < numbers.length; i++){
        if(numbers[i] < lowest1){
            if(lowest1 < lowest2){
                lowest2 = lowest1;
            }
            lowest1 = numbers[i];
        } else if (numbers[i] < lowest2){
            lowest2 = numbers[i];
        }
    }
    return lowest1 + lowest2
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))