function devide(start, end) {
    const count = []
    const a = []
    for (i = start; i <= end; i++) {
        if (i % 3 === 0) {
            count.push(i)
        }else if (i % 3 !== 0) {
            console.log(i)
        }
    }
    return count
}


console.log(devide(1, 100))