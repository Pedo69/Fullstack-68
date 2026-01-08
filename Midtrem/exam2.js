function updateInventory(currentInventory, newInventory) {
    for (let newItem of newInventory) {
    // หาว่า currentInventory มีไอเท็มนี้หรือไม่
    let existingItem = currentInventory.find(item => item.name === newItem.name);
    if (existingItem) {
        // ถ้ามีแล้ว เพิ่ม quantity
        existingItem.quantity += newItem.quantity;
    } else {
        // ถ้าไม่มี เพิ่มเป็นไอเท็มใหม่
        currentInventory.push(newItem);
    }
}
    return currentInventory;
}

const currentInventory = [
  { name: "item1", quantity: 10 },
  { name: "item2", quantity: 5 },
  { name: "item3", quantity: 8 },
];

const newInventory = [
  { name: "item1", quantity: 1 },
  { name: "item4", quantity: 7 },
  { name: "item2", quantity: 10 },
];

console.log(updateInventory(currentInventory, newInventory));
// Output:
// [ 
//   { name: "item1", quantity: 15 },
//   { name: "item2", quantity: 15 },
//   { name: "item3", quantity: 8 },
//   { name: "item4", quantity: 7 }
// ]