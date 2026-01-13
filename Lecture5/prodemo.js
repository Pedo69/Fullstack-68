function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

promiseTimeout(2000)
    .then(() => {
        console.log('done');
        return promiseTimeout(1000);
    })
    .then(() => {
        console.log('also done');
        return Promise.resolve(42);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.error('Error:');
    });
