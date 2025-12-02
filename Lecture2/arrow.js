a = 10
b = 5

const add = function(a,b){
    return a + b;
}

const addarrow = (a,b) => a + b;

const subtract = (a,b) => {
    const result = a - b;
    return result
}

console.log(`additioin ${add(a,b)}`)
console.log(`additioin arrow ${addarrow(a,b)}`)
console.log(`additioin arrow ${subtract(a,b)}`)