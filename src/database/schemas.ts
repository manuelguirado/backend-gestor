import { sql } from 'drizzle-orm';
import {
  text,
  sqliteTable,
  integer,
  primaryKey,
} from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
});
export const movements = sqliteTable('movements', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id),
  category: text('category').notNull(),
  type: text('type').notNull(),
  amount: integer('amount').notNull(),
  description: text('description').notNull(),
  date: text('date').notNull(),
});
export const categories = sqliteTable('categories', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id),
});
