import dotenv from 'dotenv';
dotenv.config();

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
