function censerword(sentence, wordcenser){
    const regex = new RegExp(wordcenser, 'gi');
    const censertext = sentence.replace(regex, '***')
    return censertext;
}

const original = "javascript is fun"
const clearpost = censerword(original, "javascript")
console.log(clearpost)