// Import express
import express from "express";

// Import all student-related controller functions
// Controllers hold the actual "logic" for what happens when a request is made
import {
  getAllStudents,
  getStudent,
  updateStudent,
  createStudent,
  deleteStudent,
} from "../Controllers/student.js";

// Create a router instance
// Think of this as a mini version of `app` that handles only student routes
const router = express.Router();

/* 
   ROUTES DEFINITIONS
   -------------------
   Each route is connected to a controller function.
   These routes ONLY define "what endpoint exists".
   The controller decides "what happens inside".
*/

// GET /student/all → Fetch all students
router.get("/all", getAllStudents);

// GET /student/:id → Fetch a specific student by ID
// Example: GET /student/123
router.get("/:id", getStudent);

// POST /student/create → Create a new student
router.post("/create", createStudent);

// PUT /student/update/:id → Update a student by ID
router.put("/update/:id", updateStudent);

// DELETE /student/delete/:id → Delete a student by ID
router.delete("/delete/:id", deleteStudent);

// Export the router so index.js can use it
export default router;
