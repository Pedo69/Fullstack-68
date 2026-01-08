const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your name? ', (name) => {
    rl.question('Enter you weigth in kg: ', (weight) => {
        rl.question('Enter your height in meters: ', (height) => {
           
            let bmi = weight / (height * height);

            console.log(`${name}, your BMI is ${bmi.toFixed(2)}`);

            rl.close();
        });
    });
});