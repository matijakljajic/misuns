import { defineConfig } from 'drizzle-kit';
export default defineConfig({
	schema: './src/lib/server/db/schema.ts',
	out: './drizzle',
	dialect: 'sqlite', // 'postgresql' | 'mysql' | 'sqlite'
	dbCredentials: {
		url: 'sqlite.db'
	}
});
