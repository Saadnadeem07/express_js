// Importing the Express framework
// Express is a minimal and flexible Node.js web application framework
// that provides a robust set of features for building APIs and web apps.
import express from "express";

// Create an Express application instance
// 'app' will be used to define routes and listen for HTTP requests
const app = express();

/* 
   ===============================
   🔹 QUERY STRING EXPLANATION 🔹
   ===============================
   A query string is the part of a URL that comes after the "?" symbol.
   Example: 
     http://localhost:3000/product?category=books&type=fiction

   Here:
     - "category" is the key
     - "books" is the value
     - "type" is another key
     - "fiction" is its value

   So, query strings are used to send **non-sensitive, small data** 
   from client → server (mostly for filtering, searching, pagination, etc.)
*/

// ---------------------------
// 📌 Route 1: /product
// ---------------------------
// Usage Example: http://localhost:3000/product?category=books&type=fiction
// - req.query will contain { category: "books", type: "fiction" }
app.get("/product", (req, res) => {
  // req.query → gives an object of all query string parameters
  console.log(req.query);

  // Sending back the value of "category" key
  // If user visits → /product?category=books
  // Response will be: "Response Ok books"
  res.send(`Response Ok ${req.query.category}`);
});

// ---------------------------
// 📌 Route 2: /p
// ---------------------------
// Usage Example: http://localhost:3000/p?a=laptop&id=123
// - req.query will contain { a: "laptop", id: "123" }
app.get("/p", (req, res) => {
  /* 
     ⚡ NOTE:
     - Here we are NOT using route parameters (like /:id)
     - Instead, we are reading query string values after "?"
     - This is useful for searches, filters, or optional data
  */

  // Object Destructuring → Extracting keys directly from req.query
  const { a, id } = req.query;

  // Example:
  // Visiting: /p?a=laptop&id=123
  // Response → "showing results for laptop 123"
  res.send(`showing results for ${a} ${id}`);
});

// ---------------------------
// 🚀 Start the Server
// ---------------------------
// The app will listen on port 3000
// Visit: http://localhost:3000 in browser or Postman
app.listen(3000, () => {
  console.log("✅ Server is running on port 3000");
});

/* 
   ===============================
   🔹 QUICK DIFFERENCE: PARAMS vs QUERY
   ===============================
   1. Query String → ?key=value (used for filters, searches, optional data)
      Example: /product?category=books&id=10
      Access: req.query.category , req.query.id

   2. Route Params → Defined in the URL path using colon (:) 
      Example: /product/:id → /product/10
      Access: req.params.id
*/
