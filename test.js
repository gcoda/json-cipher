const { cipher, hash } = require('.')('secret','aes-128-cbc')
const ciphered = cipher('asd').toString('hex').substring(0,32)
console.log(ciphered)
crypto.getCiphers()