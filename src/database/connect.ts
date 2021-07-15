import { createConnection } from "typeorm";

createConnection().then(() => console.log('🚀 Banco conectado com sucesso'));