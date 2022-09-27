const lyra2 = require ('./build/Release/lyra2.node');

const generateSalt = (saltLength) => lyra2.getSalt(saltLength);
const LyraHash = (input, salt, saltLength) => lyra2.getHash(input, salt, saltLength);

const TIME_COST = 21;
const MEMORY_COST = 4096 * 256;
const HASH_LENGTH = 64;

exports.generateSalt = generateSalt;
exports.LyraHash = LyraHash;
exports.TIME_COST = TIME_COST;
exports.MEMORY_COST = MEMORY_COST;
exports.HASH_LENGTH = HASH_LENGTH;
