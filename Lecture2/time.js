const startime = Date.now();

function somehevrytask() {
    for (let i = 0; i < 10e7; i++) {
        Math.sqrt(i);
    }
}

somehevrytask();
const endtime = Date.now();
const durtion = endtime - startime;
console.log(`time ${durtion} milisec`)