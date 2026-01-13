function prime_number_in_range(start, end) {
    let result = []
    for (let i = start; i <= end; i++) {
        let primecheck = []
        for (let h = 1; h<= i; h++) {
            if (i % h === 0) {
                primecheck.push(h)
            }
        }
        if (primecheck.length === 2) {
            result.push(i)
        }
    }
    j = 0
    for (let sum of result) {
        j = j + sum
    }
    return [result, j]
}

console.log(prime_number_in_range(10, 20))