import express from "express";
const app = express();

/*
|--------------------------------------------------------------------------
|  EXPRESS 5.x ROUTE PATH PATTERNS
|--------------------------------------------------------------------------
| You can define routes using:
| 1. String patterns
| 2. Special string characters (?, +, *, ())
| 3. Parameters (:id, :slug, etc.)
| 4. Regular Expressions
|--------------------------------------------------------------------------
*/

// ---------------- STRING PATTERNS ----------------

// Exact match
app.get("/home", (req, res) => {
  res.send("Matched exact: /home");
});
app.get("/", (req, res) => {
  res.send("Matched exact: /");
});

// Optional character (b is optional → /acd or /abcd)
//old sntax was /a(b)?cd
//also take care of 0,1,or 1+ b
app.get("/a{:b}cd", (req, res) => {
  res.send("Matched /acd or /abcd");
});

app.get(/x/, (req, res) => res.send("Contains 'x'"));
app.get(/^\/a/, (req, res) => res.send("Starts with 'a'"));
app.get(/data$/, (req, res) => res.send("Ends with 'data'"));
app.get(/^\/users\/\d{4}$/, (req, res) => res.send("4-digit userId"));
// ---------------- SERVER ----------------
app.listen(5000, () =>
  console.log("🚀 Server running on http://localhost:5000")
);
