// 📌 Importing Express
import express from "express";

// 📌 Importing custom middleware from another file
// This middleware could log request details, check authentication, etc.
import userCredentials from "./middlewares/logs.js";

// 📌 Initialize Express app
const app = express();

/* 
=======================================
 MIDDLEWARE IN EXPRESS
=======================================
- Middleware = Functions that run between the request (client → server)
  and the response (server → client).
- They have access to:
    1. req (request object)
    2. res (response object)
    3. next() → function to move to the next middleware/route
- Used for:
    - Logging requests
    - Authentication & Authorization
    - Validating data
    - Handling errors
    - Attaching extra info to requests
*/

// ==============================
// APPROACH 1: Apply middleware only on specific routes
// ==============================
app.get("/products", userCredentials, (req, res) => {
  res.send("<h1>Products Route → Check console for middleware output</h1>");
});

// ==============================
// APPROACH 2 (Recommended): Apply middleware globally
// ==============================
// If you call `app.use(userCredentials)`, then *every request* will go through it.
// This is better when you want all routes to have logging, authentication, etc.

// Uncomment this line to apply middleware globally
app.use(userCredentials);

app.get("/product", (req, res) => {
  res.send("<h1>Single Product Route → Check console for middleware output</h1>");
});

/*
⚠️ IMPORTANT NOTE:
If you use BOTH:
    1. app.use(userCredentials) (global)
    2. userCredentials in a specific route
Then middleware will run TWICE for that route.
*/

// ==============================
// START SERVER
// ==============================
app.listen(3000, () => {
  console.log("✅ Server is running on http://localhost:3000");
});
