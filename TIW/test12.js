function starswrithletter(words, letter) {
    const result = []
    for (let i of words) {
        if (i [0] === letter){
            result.push(i)
        }
    }
    return result
}

console.log(starswrithletter(["apple", "ant", "banana", "boat", "cat", "car"], "a"))
// output: ["apple", "ant"]