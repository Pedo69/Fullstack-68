const arry = [15, 16, 17, 18, 19];
const sum = arry.reduce((accumulator, currentValue) => accumulator + currentValue,0);
console.log(sum); 

const nymber = [1, 2, 3, 4, 5];
const sm = nymber.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});
console.log(sm);