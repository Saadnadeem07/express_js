// Import Express framework
import express from "express";

// Initialize Express application
const app = express();

/* -----------------------------------------------------
   Example 1: Verbose/Repeated Style (less clean)
   ----------------------------------------------------- */
// Defining each route separately
app.get("/students", (req, res) => {
  res.send("Get all students");
});

app.post("/students", (req, res) => {
  res.send("Add a new student");
});

app.put("/students", (req, res) => {
  res.send("Update a student");
});

app.delete("/students", (req, res) => {
  res.send("Delete a student");
});

/* -----------------------------------------------------
   Example 2: Cleaner Refactored Style using app.route()
   ----------------------------------------------------- */
// Chain multiple HTTP methods on the same route
app
  .route("/student")
  .get((req, res) => {
    res.send("Get all students");
  })
  .post((req, res) => {
    res.send("Add a new student");
  })
  .put((req, res) => {
    res.send("Update a student");
  })
  .delete((req, res) => {
    res.send("Delete a student");
  });

/* -----------------------------------------------------
   Start the server
   ----------------------------------------------------- */
app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
