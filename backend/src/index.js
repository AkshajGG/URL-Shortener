import app from "./app.js";
import { testConnection, initDB } from "./config/database.js";

const PORT = process.env.PORT || 3000;

await testConnection();
await initDB();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});