/*

https://www.codewars.com/kata/554b4ac871d6813a03000035


In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.

*/

  function highAndLow(input){
    const temp = input.split(' ')
    const numbers = temp.map(Number)
    var lowest;
    var highest;

    if(numbers.length === 1){
        return `${numbers[0]} ${numbers[0]}`
    } else {
        if(numbers[0] > numbers[1]){
            lowest = numbers[1]
            highest = numbers[0]
        } else {
            lowest = numbers[0]
            highest = numbers[1]
        } 
        for(let i = 0; i < numbers.length; i++){
            if(numbers[i] > highest){
                highest = numbers[i]
            } else if (numbers[i] < lowest){
                lowest = numbers[i]
            } else {
                continue
            }
        }     
    }
    return `${highest} ${lowest}`
}

console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'))