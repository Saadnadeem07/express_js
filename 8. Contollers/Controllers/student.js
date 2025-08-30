/*
   Controllers: 
   These functions handle the actual logic for each route.
   For now, we are just sending plain text.
   Later, you can connect to a database (MongoDB, MySQL, etc.)
   and replace these with real logic.
*/

// Fetch all students
const getAllStudents = (req, res) => {
  res.send("📋 All students data will be returned here");
};

// Fetch a specific student by ID
const getStudent = (req, res) => {
  // Access route parameter (id) using req.params.id
  const { id } = req.params;
  res.send(`🎯 Data for student with ID: ${id}`);
};

// Update a student by ID
const updateStudent = (req, res) => {
  const { id } = req.params;
  res.send(`✏️ Student with ID ${id} has been updated`);
};

// Create a new student
const createStudent = (req, res) => {
  res.send("➕ A new student has been created");
};

// Delete a student by ID
const deleteStudent = (req, res) => {
  const { id } = req.params;
  res.send(`🗑️ Student with ID ${id} has been deleted`);
};

// Export all controller functions so routes can use them
export {
  getAllStudents,
  getStudent,
  updateStudent,
  createStudent,
  deleteStudent,
};
