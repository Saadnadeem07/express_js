import express from "express";

const app = express();

//imagine we are dealing with the same id

app.get("/product/:id", (req, res) => {
  const id = req.params;
  res.send(`the product id  = ${id}`);
});

app.get("/order/:id", (req, res) => {
  const id = req.params;

  res.send(`the order id  = ${id}`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
