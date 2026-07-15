import express from "express";
import urlRoutes from "./routes/url.route.js";
import { redirectURL } from "./controllers/url.controller.js";

const app = express();

app.use(express.json());

// API routes
app.use("/api/url", urlRoutes);

// Public redirect routes
app.get("/:code", redirectURL);

export default app;