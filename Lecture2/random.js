function gentem() {
    const randompart = Math.random().toString(36).substring(2, 8);
    return randompart.toUpperCase();
}

const orderid = gentem();
console.log(`ID order ${orderid}`)