function FindDiVisor(num) {
    const result = []
    for (i = 1; i <= 50 ;i++) {
        if (num % i === 0) {
            result.push(i)
        }
    }
    return result
}

console.log(FindDiVisor(50))