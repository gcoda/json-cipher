const crypto = require('crypto')
module.exports = (secret, algorithm = 'aes-256-cbc') => ({
  cipher(object) {
    const cipher = crypto.createCipher(algorithm, secret)
    const encrypted = Buffer.concat([
      cipher.update(new Buffer(JSON.stringify(object), 'utf8')),
      cipher.final(),
    ])
    return encrypted
  },
  decipher(string) {
    const decipher = crypto.createDecipher(algorithm, secret)
    const decrypted = Buffer.concat([decipher.update(string), decipher.final()])
    return JSON.parse(decrypted.toString())
  },
})
