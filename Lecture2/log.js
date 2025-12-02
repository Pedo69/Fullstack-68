function createlog(message) {
    const now = new Date();
    const timestep = now.toLocaleTimeString('th-TH');
    const eventd = Math.random().toString(16).substring(2, 10).toLocaleUpperCase();
    const logmessage = message.toLocaleUpperCase();
    return `[${timestep}] [${eventd}] [${logmessage}]`
}

const log = createlog('user login successful');
console.log(log)