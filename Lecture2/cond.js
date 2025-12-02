const status = 500;
if (status === 200) {
    console.log("OK")
} else if (status === 400){
    console.log("Bad request")
} else{
    (console.log("unknow"))
}

switch(status) {
    case 200:
        console.log('ok')
        break

    case 400:
        console.log('Bad request')
        break
    default:
        console.log('unknow')
        break
}

const messge = 
    status == 200 ? "OK": "Bad request";
console.log(messge)

