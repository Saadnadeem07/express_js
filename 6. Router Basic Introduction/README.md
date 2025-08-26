# Express Router Example

This project demonstrates how to use **Express Router** in a clean and
maintainable way.\
Routers in Express allow you to break down your application into
smaller, modular route files.

------------------------------------------------------------------------

## 📂 Project Structure

    project/
    │── index.js          # Main entry point of the application
    │── Routes/
        │── student.js    # Routes related to students
        │── teacher.js    # Routes related to teachers

------------------------------------------------------------------------

## 🚀 Getting Started

### 1. Install dependencies

``` bash
npm install express
```

### 2. Run the application

``` bash
node index.js
```

Server will start on:

    http://localhost:3000

------------------------------------------------------------------------

## 📌 What is Router in Express?

An **Express Router** is like a mini Express application.\
It can handle its own routes, middleware, and logic, but it is mounted
on the main app.

### ✅ Why use Router?

-   Keeps code **organized** and **modular**.
-   Separates logic by **features** (e.g., `students`, `teachers`,
    `auth`).
-   Makes the app **scalable** as it grows.
-   Easier to **maintain** because routes are not all in one giant file.

------------------------------------------------------------------------

## 📖 Example

In `student.js` we define all routes related to students:

``` js
import express from "express";
const router = express.Router();

router.get("/all", (req, res) => {
  res.send("Get all students");
});

router.post("/create", (req, res) => {
  res.send("Add a new student");
});

export default router;
```

Then, in `index.js`, we import and mount it:

``` js
import studentsRouter from "./Routes/student.js";
app.use("/students", studentsRouter);
```

Now you can visit: - `http://localhost:3000/students/all` -
`http://localhost:3000/students/create`

------------------------------------------------------------------------

## 🌍 Why Router is Helpful in Bigger Applications?

In large-scale apps (e.g., e-commerce, learning platforms, social
media): - There may be **hundreds of routes** (products, users,
payments, orders, etc.). - Without Routers, all routes would be in **one
huge file** → messy and hard to debug. - Routers allow **splitting by
feature** (e.g., `users.js`, `orders.js`, `products.js`). - Improves
**team collaboration** since multiple developers can work on separate
route files.

------------------------------------------------------------------------

## 🏗 Future Improvements

-   Add controllers for separating business logic from routes.
-   Connect to a real database (MongoDB, PostgreSQL, etc.).
-   Add authentication middleware.

------------------------------------------------------------------------

