// -----------------------------------------------------
// Students Router
// -----------------------------------------------------

import express from "express";

const router = express.Router();

/* -----------------------------------------------------
   Routes for Students
   Base URL: /students
   ----------------------------------------------------- */

// GET → Fetch all students
router.get("/all", (req, res) => {
  res.send("Get all students");
});

// POST → Create a new student
router.post("/create", (req, res) => {
  res.send("Add a new student");
});

// PUT → Update an existing student
router.put("/update", (req, res) => {
  res.send("Update a student");
});

// DELETE → Remove a student
router.delete("/delete", (req, res) => {
  res.send("Delete a student");
});

export default router;
