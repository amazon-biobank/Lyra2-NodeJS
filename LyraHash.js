var lyra2 = require('./build/Release/lyra2');

const generateSalt = (saltLength) => lyra2.getSalt(saltLength);
const LyraHash = (input, salt, saltLength) => lyra2.getHash(input, salt, saltLength);

const salt = generateSalt(16)
console.log(salt);
console.log(LyraHash("test", salt, 16));
