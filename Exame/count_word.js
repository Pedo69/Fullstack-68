function count_word(word) {
    let count = 0
    for (const a of word) {
        if (a !== "") {
            count++;
        }
    }
    return count;
}
console.log(count_word("Hello", "World"))