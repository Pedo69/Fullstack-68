const promise = new Promise((resolve, reject) => {
    const res = true; // Simulating a successful operation
    if (res) {
        resolve('Operation was successful!');
    } else {
        reject(Error('Operation failed.'));
    }
});

promise.then(
    (res) => console.log(res),
    (err) => console.log(err)
)