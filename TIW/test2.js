function Average(lst) {
    result = 0
    for (let i of lst) {
        result = result + i
    }
    return result / lst.length
}

console.log(Average([6,10,15,26,31]))