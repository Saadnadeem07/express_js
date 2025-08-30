import express from "express";

const app = express();
//⚠️ For destructuring The param name in the route definition must match what you destructure from req.params.
app.get("/product/:category/:id", (req, res) => {
  const { category, id } = req.params;
  console.log(`${category} ${id} `);
  res.send(`${category} ${id} -- `);
});

//url will be like http://localhost:3001/product/order/wednesday/august/2025
//output wednesday august 2025
app.get("/product/order/:day/:month/:year", (req, res) => {
  const { day, month, year } = req.params;
  res.send(`${day}  ${month} ${year}`);
});

//but now lets use app.params in the next file to make code clean and non repitetive 😉

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
