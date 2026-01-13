function check_prime(n) {
    result = []
    for (i = 1; i <= n ; i++){
        if (n % i === 0) {
            result.push(i)
        } else;
    }
    if (result.length === 2) {
        return "is prime"
    } else{
        return "is not prime"
    }
}
console.log(check_prime(17))
console.log(check_prime(18))