function processAndCombineStrings(strings, lengthThreshold) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];

    // แปลงทุกคำเป็น string และ uppercase
    const upperStrings = strings.map(s => String(s).toUpperCase());

    // กรองคำที่ยาว >= lengthThreshold
    const filteredWords = upperStrings.filter(word => word.length >= lengthThreshold);

    // สร้าง array ของ object { word, vowelCount }
    const wordsWithVowels = filteredWords.map(word => {
        let count = 0;
        for (const char of word) {
            if (vowels.includes(char)) count++;
        }
        return { word, vowelCount: count };
    });

    // เรียงคำตามจำนวนสระจากมากไปน้อย
    // ถ้าเท่ากัน ให้เรียงตามตัวอักษร
    wordsWithVowels.sort((a, b) => {
        if (b.vowelCount !== a.vowelCount) {
            return b.vowelCount - a.vowelCount; // มากไปน้อย
        } else {
            return a.word.localeCompare(b.word); // เรียงตามตัวอักษร
        }
    });

    // รวมคำเป็น string เดียว
    return wordsWithVowels.map(obj => obj.word).join(' ');
}

// --- ตัวอย่างการทดสอบ ---
const strings = ["apple", "banana", "cherry", "date", "fig","grape"];

console.log(processAndCombineStrings(strings, 5));
// Output: "BANANA APPLE GRAPE CHERRY"

console.log(processAndCombineStrings(strings, 6));
// Output: "BANANA CHERRY"

console.log(processAndCombineStrings(["hi", "hello", "world"], 2));
// Output: "HELLO WORLD HI"
