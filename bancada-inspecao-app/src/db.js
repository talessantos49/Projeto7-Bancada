import Dexie from 'dexie';

// Cria o banco
export const db = new Dexie('OrbitalDB');

// Define a versão e a estrutura das tabelas
db.version(1).stores({
  readings: '++id, sensor, angle, value, timestamp' // Chave primária auto-incremental
});

export default db;
