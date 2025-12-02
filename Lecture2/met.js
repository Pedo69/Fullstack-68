const fullnaem = " Anirach Mingkhwn ";

const clearname = fullnaem.trim();
console.log(`${clearname}`)

const naemparts = clearname.split(' ');
console.log(`${naemparts}`)

const finalpart = naemparts.filter(Boolean);
console.log(`${finalpart}`)

const firtname = finalpart[0];
console.log(`hello ${firtname}`)