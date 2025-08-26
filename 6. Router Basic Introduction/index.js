// -----------------------------------------------------
// Main Application Entry Point
// -----------------------------------------------------

// First check this link out 👇
// http://expressjs.com/en/5x/api.html#router

// 1. Create routes folder and put your routes in a seperate file.
// 2. Create instance of express.Router()
// 3. Instead of app.method change that to "router.method"
// 4. Export router from a specific file
// 5. Import route in index.js file
// 6. use the (app.use) built-in middleware & provide your routes.

import express from "express";
import studentsRouter from "./Routes/student.js";
import teachersRouter from "./Routes/teacher.js";

const app = express();

/* -----------------------------------------------------
   Middleware (if needed in future)
   ----------------------------------------------------- */
// app.use(express.json()); // Uncomment if handling JSON body payloads

/* -----------------------------------------------------
   Mount Routers
   ----------------------------------------------------- */
// Routes are grouped and separated for maintainability
app.use("/students", studentsRouter);
app.use("/teachers", teachersRouter);

/* -----------------------------------------------------
   Start the server
   ----------------------------------------------------- */
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
