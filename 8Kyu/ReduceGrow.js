/*

https://www.codewars.com/kata/57f780909f7e8e3183000078/javascript


Given a non-empty array of integers, return the result of 
multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

*/

function grow(x){
    var total = x[0]
    for(let i = 1; i < x.length; i++){
        total *= x[i]
    }
    return total
}

console.log(grow([1,2]))