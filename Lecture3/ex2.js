let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2, true, 'Apple'];
let values3 = ['Mars', 9, 'Apple'];

for (let vla1 of values1) {
    for (let vla2 of values2) {
        for (let vla3 of values3) {
            if (vla1 == vla2 && vla2 == vla3) {
                console.log(vla1);
            }
        }
    }
}