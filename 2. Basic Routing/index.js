// 📌 Use "npm run dev" to run this file (if nodemon is set up in package.json)

// Importing the express framework
import express from "express";

// Initialize the Express application
const app = express();

// Define the port (use environment variable if available, otherwise default to 5000)
const port = process.env.PORT || 5000;

// Start the server and listen on the defined port
// Callback runs once the server starts successfully
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});

/* ----------------- ROUTING ----------------- */
// Routing means defining endpoints (URLs) where the server responds to client requests.

// Root route -> http://localhost:5000/
app.get("/", (req, res) => {
  res.send("🏠 Welcome to the Home Page!");
});

// About route -> http://localhost:5000/about
app.get("/about", (req, res) => {
  res.send("ℹ️ You are on the About Page");
});

// Contact route -> http://localhost:5000/contact
app.get("/contact", (req, res) => {
  res.send("📞 You are on the Contact Page");
});

// 📝 Notes:
// 1. `app.get(path, callback)` → Handles GET requests on a given path.
//    - `path` is the URL (like "/", "/about", "/contact")
//    - `callback` has (req, res) where:
//      - req = request object (data coming from client)
//      - res = response object (data we send back)
// 2. Express automatically handles HTTP headers, response formatting, etc. for us.
// 3. This is the core of Express: define routes and return responses.
