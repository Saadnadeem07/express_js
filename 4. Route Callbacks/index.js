// Import the Express framework
import express from "express";

const app = express();

/* -----------------------------------------------------
   Callback functions for reuse in routes
   ----------------------------------------------------- */
let cb1 = (req, res, next) => {
  console.log("first callback");
  next(); // Pass control to the next callback
};
let cb2 = (req, res, next) => {
  console.log("second callback");
  next();
};
let cb3 = (req, res) => {
  console.log("third callback");
  res.send("Created three callback functions"); // ✅ Only one response per request
};

/* -----------------------------------------------------
   Example 1: Route with two inline callbacks
   ----------------------------------------------------- */
app.get(
  "/two",
  (req, res, next) => {
    console.log("first callback");
    // No response here, just pass control forward
    next();
  },
  (req, res) => {
    console.log("second callback");
    res.send("Hello from second callback!"); // ✅ Send response once
  }
);

/* -----------------------------------------------------
   Example 2: Route with an array of callbacks
   ----------------------------------------------------- */
const arrayOfCallbacks = [cb1, cb2, cb3];
app.get("/three", arrayOfCallbacks);

/* -----------------------------------------------------
   Example 3: Route demonstrating multiple callbacks
   using res.write() and res.end() for streaming response
   ----------------------------------------------------- */
app.get(
  "/callback-hell",
  (req, res, next) => {
    console.log("1st callback");
    res.write("Currently in 1st callback \n");
    //can't use res.end() here ❌
    next();
  },
  (req, res, next) => {
    console.log("2nd callback");
    res.write("Currently in 2nd callback \n");
    //can't use res.end() here ❌
    next();
  },
  (req, res, next) => {
    console.log("3rd callback");
    res.write("Currently in 3rd callback \n");
    //can't use res.end() here ❌
    next();
  },
  (req, res, next) => {
    console.log("4th callback");
    res.write("Currently in 4th callback \n");
    //can't use res.end() here ❌
    next();
  },
  (req, res, next) => {
    console.log("5th callback");
    res.write("Currently in 5th callback \n");
    //can't use res.end() here ❌
    next();
  },
  (req, res) => {
    console.log("6th callback");
    res.write("Currently in 6th callback \n");
    res.end(); // ✅ Properly end the response
  }
);

/* -----------------------------------------------------
   Example 4: Same as above but using res.send() at the end
   (cannot use res.send in earlier callbacks)
   ----------------------------------------------------- */
app.get(
  "/callback-hell-two",
  (req, res, next) => {
    //can't use res.end() here ❌
    console.log("1st callback");
    next();
  },
  (req, res, next) => {
    //can't use res.send() here ❌
    console.log("2nd callback");
    next();
  },
  (req, res, next) => {
    //can't use res.send() here ❌
    console.log("3rd callback");
    next();
  },
  (req, res, next) => {
    //can't use res.send() here ❌
    console.log("4th callback");
    next();
  },
  (req, res, next) => {
    //can't use res.send() here ❌
    console.log("5th callback");
    next();
  },
  (req, res) => {
    console.log("6th callback");
    // ✅ Send final response once
    res.send("Callback chain completed at 6th callback!");
  }
);

/* -----------------------------------------------------
   Start the server
   ----------------------------------------------------- */
app.listen(3000, () => console.log("Server running on port 3000"));
