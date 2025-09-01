// Importing the express library
// Express is a Node.js framework used to build web servers and APIs easily.
import express from "express";

// Importing the products data from another file (products.js)
// This could be an array of objects that represent products in a store.
import products from "./products.js";

// Create an instance of an Express application.
// Think of "app" as your server that will handle incoming requests.
const app = express();

/*
  Route: GET /products
  --------------------
  - "app.get" means we are handling a GET request (used to fetch data).
  - "/products" is the endpoint path.
  - (req, res) is the callback function that runs whenever someone visits this endpoint.
  
  Here:
  - req = request object (contains info about the client request like query, params, headers, body, etc.)
  - res = response object (used to send a response back to the client)

  In this case, when the client goes to "http://localhost:3000/products",
  we are sending back the full list of products.
*/
app.get("/products", (req, res) => {
  // ❌ res.send is fine for strings, HTML, buffers, or arrays.
  //    If you send an object/array with res.send, Express internally converts it to JSON.
  // ✅ BUT, best practice when returning data (API style) is to use res.json,
  //    because it makes clear that you're sending JSON, and it also sets the correct Content-Type header.
  res.send(products);

  // If we want to be explicit and follow best practices, we should use:
  // res.json(products);
});

/*
  Why do we usually prefer res.json() for APIs?
  --------------------------------------------
  - res.send(products) → Will work, but it's generic (Express decides how to send the response).
  - res.json(products) → Explicitly says: "We are sending JSON data".
  - It also ensures that the response header Content-Type = application/json
  - So in real-world APIs, res.json is recommended.
*/
app.listen(3000, () => {
  console.log("✅ Server is running on port 3000");
});
