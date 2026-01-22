function countvowel(str) {
    const vowel = ["a","e","i","o","u"]
    let count_word = 0
    for (let i of str.toLowerCase()) {
        if (vowel.includes(i)){
            count_word++
        }
    }
    return count_word
}


console.log(countvowel("Hello World"))
console.log(countvowel("JavaScript"))