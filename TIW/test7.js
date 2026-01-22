const word = "Hello World, this is Thailand!!"
const vowel = ["a", "e", "i", "o", "u"]

console.log(word.split('').filter(a => !vowel.includes(a)).join(''))