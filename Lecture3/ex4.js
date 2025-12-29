const message = "Hello World";
const vowels = ["a", "e", "i", "o", "u"];

for (const ch of message) {
    if (vowels.includes(ch)) {
        console.log(ch);
    }
}