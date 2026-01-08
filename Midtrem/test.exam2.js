function updateInventory(currentInventory, newInventory) {
    let fould = false
    for (let newItem of newInventory) {
        fould = false
        for (let curritem of currentInventory) {
            if (newItem.name === curritem.name) {
                curritem.quantity += newItem.quantity
                fould = true
            }
        }
        if (!fould) {
            currentInventory.push(newItem)
        }
    }
    return currentInventory.sort((a,b) => a.name.localeCompare(b.name))
}

const currentInventory = [
  { name: "item1", quantity: 10 },
  { name: "item2", quantity: 5 },
  { name: "item3", quantity: 8 },
];

const newInventory = [
  { name: "item1", quantity: 5 },
  { name: "item4", quantity: 7 },
  { name: "item2", quantity: 10 },
  { name: "item9", quantity: 10 },
  { name: "item5", quantity: 10 },
];

console.log(updateInventory(currentInventory, newInventory));
// Output:
// [ 
//   { name: "item1", quantity: 15 },
//   { name: "item2", quantity: 15 },
//   { name: "item3", quantity: 8 },
//   { name: "item4", quantity: 7 }
// ]