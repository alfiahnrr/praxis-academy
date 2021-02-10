const saldo = (saldo1,saldo2,callback) => {
    return callback (saldo1,saldo2)
}

const add = (a,b)=>{
    return a + b
}

const minus = (a,b) => {
    return a - b
}

const bagi = (a,b) => {
    return a / b
}

const kali = (a,b) => {
    return a * b
}

S1 = saldo(1000,2000,add)
console.log(S1)

S2 = saldo(3000, 200, minus)
console.log(S2)

S3 = saldo(400, 20, bagi)
console.log(S3)

S4 = saldo(200, 2, kali)
console.log(S4)