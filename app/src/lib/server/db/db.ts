import { drizzle } from 'drizzle-orm/better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import Database from 'better-sqlite3';
import * as schema from './schema';

const conn = new Database('sqlite.db');
conn.pragma('journal_mode = WAL');

export const database = drizzle(conn, { schema });
migrate(database, { migrationsFolder: './drizzle' });

export const connection = conn;
export const db = database;
