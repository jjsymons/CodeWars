/*

https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/solutions/javascript


Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.


*/
function findShort(s){
    var strings = s.split(' ')
    var shortest =  s.length;
    for(let i = 0; i < strings.length; i++){
        if(strings[i].length < shortest){
            shortest = strings[i].length
        }
    }
    return shortest
  }


console.log(findShort("bitcoin take over the world maybe who knows perhaps"))