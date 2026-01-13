function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function longRunnningOperation() {
    console.log('operation started');
    return 42;
}

async function run() {
    console.log('start');
    await promiseTimeout(2000);
    const response = await longRunnningOperation();
    console.log(response);
    console.log('end');
}

console.log('Before run');
run()
console.log('After run');