import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes"; // Assuming this function adds API routes to 'app'
import { setupVite, serveStatic, log } from "./vite"; // 'serveStatic' is crucial for production
import path from 'path'; // For path manipulation if needed
import { fileURLToPath } from 'url'; // For __dirname in ES modules

// Helper to get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
// When built, this file (index.js) will be in the 'dist' directory.
const __builtDir = path.dirname(__filename);

const app = express();

// --- Standard Middleware ---
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// --- Custom Logging Middleware (Your existing code) ---
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson: any) {
    capturedJsonResponse = bodyJson;
    return originalResJson.call(res, bodyJson);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }
      log(logLine);
    }
  });
  next();
});


// --- Main async setup function ---
async function initializeApp() {
  // Register your API routes
  // Assuming registerRoutes modifies `app` directly or returns `app`
  await registerRoutes(app);

  // --- Error Handling Middleware (Your existing code) ---
  // Place it after all your routes are defined
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    console.error("Server Error:", err); // Log the error for debugging on Vercel
    res.status(status).json({ message });
    // Removed 'throw err;' as the response is already sent.
    // Re-throwing can sometimes interfere with Vercel's error handling or lead to unhandled promise rejections if not caught.
  });

  // --- Vite Dev Server or Static Serving for Production ---
  if (process.env.NODE_ENV === "development") {
    // For local development, setupVite is used.
    // This might involve app.listen() internally or require you to listen on the http.Server it returns.
    // This block will NOT run on Vercel for production deployments.
    // const devServer = await setupVite(app, null); // Adjust based on setupVite's signature
    // const PORT = 5000;
    // devServer.listen(PORT, () => console.log(`Dev server running on http://localhost:${PORT}`));
    log("Development mode: Vite middleware will be set up by setupVite (if running locally).");
    // For local dev with this structure, you'd typically need to run app.listen() or similar here
    // after setupVite has configured the app.
    // However, for Vercel, we only care about the 'else' block for production.
  } else {
    // PRODUCTION (This will run on Vercel)
    log("Production mode: Serving static files.");
    // `serveStatic` needs to correctly serve from `dist/public`
    // and handle SPA fallback (serving index.html for non-API/non-file routes)
    // Example of what serveStatic might do:
    // const publicDir = path.join(__builtDir, 'public'); // Relative to dist/index.js
    // app.use(express.static(publicDir));
    // app.get('*', (req, res) => {
    //   if (!req.path.startsWith('/api/')) { // Avoid SPA fallback for API routes
    //     res.sendFile(path.join(publicDir, 'index.html'));
    //   } else {
    //     // If it's an API route not handled, it will 404 by default or be handled by specific API route logic
    //     _next(); // Pass to next error handler or 404
    //   }
    // });
    serveStatic(app); // Assuming this function is correctly implemented
  }
}

// Initialize the app and then export it
// We don't call app.listen() here because Vercel handles it.
initializeApp().catch(err => {
  console.error("Failed to initialize application:", err);
  // process.exit(1); // Exiting might not be ideal in a serverless context, let Vercel handle it.
});

// --- Export the Express app for Vercel ---
export default app;