const { EncryptedCertificate } = require("./EncryptedCertificate");
const { encrypt, generateKeyAndSalt } = require("./encryption");


function lyra2Encrypt(password, text) {
    const [keyHash, salt] = generateKeyAndSalt(password);
    const encryptedText = encrypt(keyHash, text);
    const certificate = new EncryptedCertificate(encryptedText, salt);
    return certificate.getObject();
}

module.exports = {
  lyra2Encrypt,
};
