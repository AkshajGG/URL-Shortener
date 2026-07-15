import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

export const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
});

export async function testConnection() {
    try {
        const result = await pool.query("SELECT NOW();");

        console.log("Connected to Supabase!");
        console.log(result.rows[0]);
    }
    catch (err) {
        console.error(err);
    }
}

export async function initDB(){

    await pool.query(`
        CREATE TABLE IF NOT EXISTS urls(
            id SERIAL PRIMARY KEY,
            short_code VARCHAR(8) UNIQUE NOT NULL,
            original_url TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT NOW()
        );
    `);
}