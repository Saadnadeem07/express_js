// Import the express framework
import express from "express";

// Import the student routes (all student-related endpoints are inside this file)
import student from "./Routes/student.js";

// Initialize the Express application
const app = express();

// Mount the student routes at "/student"
// Now every route inside student.js will start with "/student"
// Example: GET /student/all, GET /student/123, POST /student/create
app.use("/student", student);

// Start the server on port 3000
app.listen(3000, () => {
  console.log("✅ Server is running at http://localhost:3000");
});
