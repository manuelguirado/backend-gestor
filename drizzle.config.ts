import dotenv from 'dotenv';
dotenv.config();
console.log('DATABASE_URL:', process.env.DATABASE_URL);
console.log('DATABASE_TOKEN:', process.env.DATABASE_TOKEN);

import type { Config } from 'drizzle-kit';
export default {
  schema: '../backend-gestor/src/database/schemas.ts',
  out: '../backend-gestor/src/database/migrations',
  dialect: 'turso',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    authToken: process.env.DATABASE_TOKEN!,
  },
} satisfies Config;
