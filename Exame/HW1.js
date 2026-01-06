function countString(input, type) {
    if (!["w", "c", "v"].includes(type)) {
        throw new Error("Invalid type.");
    }
    let count = 0
    let pervi = " ";
    reword = input.trim().replace(",","").replace("?","")
    if (type === "w") {
        for (const word of reword) {
             if (word!== " " && pervi === " ") {
                count++; 
            }
        pervi = word;
        } 
    }
    else if (type === "c") {
        for (const word of input.trim()) {
            if (word !== " ") {
                count++;
            }
        }
    }
    else if (type === "v") {
        for (const word of reword) {
            vowrl = ["a","e","i","o","u"]
            if (vowrl.includes(word)) {
                count++;
            }
        }
    }
    return count;
}
console.log("Word count:", countString("Hello world, how are you?", "w")); // Output: 5
console.log("Character count:", countString("Hello world, how are you?", "c")); // Output: 21
console.log("Vowel count:", countString("Hello world, how are you?", "v")); // Output: 8


module.exports = countString;
