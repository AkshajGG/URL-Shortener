import {} from "../services/services.js";
import { pool } from "../config/database.js";

// POST /api/url/
export async function createShortURL(req, res) {
    try {
        const originalURL = req.body.url;
        const shortCode = generateShortCode();

        await pool.query(
            `
            INSERT INTO urls(short_code, original_url) 
            VALUES ($1, $2)
            `,
            [shortCode, originalURL]
        );

        res.status(201).json({
            shortCode
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: "Internal server error"
        });
    }
}

// GET /api/url/:code
export async function getURLInfo(req, res) {
    try {
        const code = req.params.code;
        const result = await pool.query(
            `
            SELECT *
            FROM urls
            WHERE short_code = $1
            `
            [code]
        )

        if (result.rows.length === 0) {
            return res.status(404).json({
                error: "URL not found"
            });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: "Internal server error"
        });
    }
}

// DELETE /api/url/:code
export async function deleteURL(req, res) {
    try {
        const code = req.params.code;
        await pool.query(
            `
            DELETE FROM urls
            WHERE short_code = $1
            `
            [code]
        );
        res.status(201).json({
            message: "Deleted"
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: "Internal server error"
        });
    }
}

// GET /:code
export async function redirectURL(req, res) {
    try {
        const code = req.params.code;
        const result = await pool.query(
            `
            SELECT original_url
            FROM urls
            WHERE short_code = $1
            `
            [code]
        );
        
        res.redirect(
            result.rows[0].originalURL
        );
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: "Internal server error"
        });
    }
}