function charfrequency(text) {
    let result = {};
    let text_new = text.replace(/\s/g, '').toLowerCase();

    for (let i of text_new) {
        if (!result[i]) {        // ถ้ายังไม่มี key นี้
            result[i] = 1;       // ตั้งค่าเริ่มต้น 1
        } else {                 // ถ้ามี key อยู่แล้ว
            result[i] += 1;      // บวกค่าเดิม +1
        }
    }

    return result; // คืนค่า object ที่นับเสร็จ
}
console.log(charfrequency("Hello Thailand"))