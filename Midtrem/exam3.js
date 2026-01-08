function findLongestRepeatedSubstring(inputStr) {
    let n = inputStr.length;
    
    // loop ความยาว substring จากยาวที่สุดไปสั้นที่สุด
    for (let length = n - 1; length >= 1; length--) {
        // loop ตำแหน่งเริ่มต้นของ substring
        for (let start = 0; start <= n - length; start++) {
            let sub = inputStr.substring(start, start + length);

            // เช็กว่ามี substring นี้ซ้ำไหม
            if (inputStr.indexOf(sub) !== inputStr.lastIndexOf(sub)) {
                return sub; // เจอแล้ว คืนค่าทันที
            }
        }
    }

    return "";
}

// ทดสอบ
console.log(findLongestRepeatedSubstring("banana")); // Output: "ana"
console.log(findLongestRepeatedSubstring("abcd"));   // Output: ""
console.log(findLongestRepeatedSubstring("ababa"));  // Output: "aba"
