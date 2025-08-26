// -----------------------------------------------------
// Teachers Router
// -----------------------------------------------------

import express from "express";

const router = express.Router();

/* -----------------------------------------------------
   Routes for Teachers
   Base URL: /teachers
   ----------------------------------------------------- */

// GET → Fetch all teachers
router.get("/all", (req, res) => {
  res.send("Get all teachers");
});

// POST → Create a new teacher
router.post("/create", (req, res) => {
  res.send("Add a new teacher");
});

// PUT → Update an existing teacher
router.put("/update", (req, res) => {
  res.send("Update a teacher");
});

// DELETE → Remove a teacher
router.delete("/delete", (req, res) => {
  res.send("Delete a teacher");
});

export default router;
