const { ENCRYPTION_ALGORITHM } = require('./encryption');
const { HASH_LENGTH, MEMORY_COST, TIME_COST } = require('./lyra2-adapter');

class EncryptedCertificate {
    encrypt_alg;
    encrypted_content;
    hashing_alg;
    hashing_mem_cost;
    hashing_output_len;
    hashing_t_cost;
    salt;

    constructor(encrypted_content, salt) {
        this.encrypted_content = encrypted_content;
        this.salt = salt;
        
        this.encrypt_alg = ENCRYPTION_ALGORITHM;
        this.hashing_mem_cost = MEMORY_COST;
        this.hashing_t_cost = TIME_COST;
        this.hashing_output_len = HASH_LENGTH;
        this.hashing_alg = 'Lyra2'
    }

    getObject = () => {
        return {
            "encrypt_alg": this.encrypt_alg, 
            "encrypted_content": this.encrypted_content,
            "hashing_alg": this.hashing_alg,
            "hashing_mem_cost": this.hashing_mem_cost,
            "hashing_output_len": this.hashing_output_len,
            "hashing_t_cost": this.hashing_t_cost,
            "salt": this.salt
        }
    }
}

module.exports = { EncryptedCertificate };
