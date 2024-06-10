/*

https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript


Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

*/


function disemvowel(str) {

    var letters = str.split('');
    var array = []
    var output = ""

    for(let i = 0; i < letters.length; i++){
        if(letters[i].toLowerCase() === 'a' || letters[i].toLowerCase() === 'e' || letters[i].toLowerCase() === 'i'|| letters[i].toLowerCase() === 'o' || letters[i].toLowerCase() === 'u'){
            console.log(letters[i] + " is a vowel")
        } else {
            array.push(letters[i])
        }
    }
    return output = array.join('')
  }

  console.log(disemvowel("HellO JoE"))