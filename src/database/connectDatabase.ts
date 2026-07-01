import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import dotenv from 'dotenv';
dotenv.config();
const turso = createClient({
  url: process.env.DATABASE_URL!,
  authToken: process.env.DATABASE_TOKEN!,
});
export const db = drizzle(turso);
