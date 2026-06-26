import { drizzle } from 'drizzle-orm/node-postgres';
import { createClient } from '@libsql/client';
const turso = createClient({
  url: process.env.DATABASE_URL!,
  authToken: process.env.DATABASE_TOKEN!,
});
export const db = drizzle(turso);
