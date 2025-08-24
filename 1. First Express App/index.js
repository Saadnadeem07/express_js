// Command to run this file: npm run dev

// Import the Express.js framework (built on top of Node.js HTTP module)
import express from "express";

// Initialize the Express application
const app = express();

// Define a basic GET route for the root URL
// Accessible via: http://localhost:5000/
app.get("/", (req, res) => {
  res.send("Server is Up!"); // Send plain text response
});

// Define the port number from environment variables (if available) or fallback to 5000
const port = process.env.PORT || 5000;

// Start the Express server and listen on the specified port
// Express internally uses Node.js's http.createServer() behind the scenes
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port} 🔥`);
});
