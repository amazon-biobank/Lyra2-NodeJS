const { lyra2Encrypt } = require('../src/encrypt-certificate')
const { decrypt, generateKey } = require("../src/encryption");


test('Encrypts a file with a password with Lyra2 hashing scheme', () => {
    const password = "password_test";
    const plainText = "Test Text";
    const amazonCertificate = lyra2Encrypt(password, plainText);
    console.log({ amazonCertificate });
    const salt = amazonCertificate['salt']
    const key = generateKey(password, salt);
    const encrypted = amazonCertificate['encrypted_content'];
    const decrypted = decrypt(key, encrypted);
    console.log({decrypted});
    expect(decrypted === plainText);
});
