function criticalError() {
    throw new Error("throwing an exception");
}

function logerror(theexception) {
    console.log(theexception);
}

console.log("\n********** Try...Catch Example **********\n");

try {
    criticalError();
} catch (ex) {
    console.log("got an error");
    logerror(ex);
}

console.log("\n********** Throwing in try..catch **********\n");

try {
    throw "throwing in try..catch";
} catch (ex) {
    console.log("got an error");
    logerror(ex);
}

console.log("\n********** try catch finally **********\n");

try {
    criticalError();
} catch (ex) {
    console.log("got an error");
    logerror(ex.message);
} finally {
    console.log("code that always runs");
}

function hello() { 
    console.log("\n*********** throwing an exception **********\n");
}