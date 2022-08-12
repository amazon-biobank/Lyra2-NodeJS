const crypto = require('crypto');

const { LyraHash, generateSalt } = require("./lyra2-adapter");

const algorithm = 'aes-256-cfb';

const KEY_SIZE = 32;
const SALT_LENGTH = 16;

const ArrayBufferToBuffer = (arrayBuffer) => {
    const buffer = Buffer.from(arrayBuffer)
    
    return buffer;
}

const splitKeyIv = (keyHash) => {
    const bufferKey = ArrayBufferToBuffer(keyHash);
    const key = bufferKey.slice(0, KEY_SIZE);
    const iv = bufferKey.slice(KEY_SIZE, KEY_SIZE  + KEY_SIZE / 2);
    return [key, iv];
}

const encrypt = (keyHash, text) => {
    const [key, iv] = splitKeyIv(keyHash);
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    const encrypted = cipher.update(text, 'utf-8');
    const base64Encrypted = Buffer.from(encrypted).toString('base64');
    return base64Encrypted;
}

const decrypt = (keyHash, cypher) => {
    const base64Cypher = Buffer.from(cypher, 'base64');
    const [key, iv] = splitKeyIv(keyHash);
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    const decrypted = decipher.update(base64Cypher, '', 'utf-8');
    return decrypted;
}

const generateKey = (password, salt) => {
    const keyHash = LyraHash(password, salt, SALT_LENGTH);
    return keyHash;
}

const generateKeyAndSalt = (password) => {
    const salt = generateSalt(SALT_LENGTH);
    const saltBytes = Buffer.from(salt);
    const encodedSalt = saltBytes.toString('base64');
    const keyHash = LyraHash(password, encodedSalt, SALT_LENGTH);
    return [keyHash, encodedSalt];
}

exports.encrypt = encrypt;
exports.decrypt = decrypt;
exports.generateKey = generateKey;
exports.generateKeyAndSalt = generateKeyAndSalt;
exports.ENCRYPTION_ALGORITHM = algorithm;
exports.KEY_SIZE = KEY_SIZE;
