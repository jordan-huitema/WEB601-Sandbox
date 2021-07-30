const bufFromArray = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72])
console.log(bufFromArray.toString())

const arrayBuffer = new Uint16Array(2)
arrayBuffer[0] = 5
arrayBuffer[1] = 7000

const bufFromArrayBuffer = Buffer.from(arrayBuffer.buffer)
console.log(bufFromArrayBuffer)

arrayBuffer[1] = 7001

console.log(bufFromArrayBuffer)

// buffer data types example

const bufFromString = Buffer.from('¿Cómo está?')

console.log(bufFromString.toString('utf8'))
console.log(bufFromString.toString())

console.log(bufFromString.toString('ascii'))

const bufFromHex = Buffer.from('c2bf43c3b36d6f20657374c3a13f', 'hex')

console.log(bufFromHex.toString())