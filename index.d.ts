declare module "lyra2-amazon" {
    const generateSalt: (saltLength: number) => ArrayBuffer;

    const LyraHash: (input: string, salt: string, saltLength) => ArrayBuffer;

    const TIME_COST: number;
    const MEMORY_COST: number;
    const HASH_LENGTH: number;
}
