# Express.js Query Params vs Route Params

This project demonstrates the **difference between Query Parameters and Route Parameters in Express.js**.

---

## 🚀 How It Works

### 1. Query Parameters (`req.query`)

- A query string is the part of the URL that comes **after the `?`** symbol.
- It is mainly used for **search, filtering, sorting, and optional data passing**.
- Format:
  ```
  /route?key1=value1&key2=value2
  ```

#### Example from Code:

```js
app.get("/product", (req, res) => {
  console.log(req.query);
  res.send(`Response Ok ${req.query.category}`);
});
```

If you visit:

```
http://localhost:3000/product?category=books&type=fiction
```

Output in console:

```js
{ category: 'books', type: 'fiction' }
```

Response:

```
Response Ok books
```

👉 Use Case: Searching/filtering results, e.g. `/products?category=books&sort=asc`.

---

### 2. Route Parameters (`req.params`)

- Route parameters are **part of the URL path** and are defined using `:` in the route definition.
- They are **mandatory values** (unless made optional with regex).
- Format:
  ```
  /route/:paramName
  ```

#### Example:

```js
app.get("/user/:id", (req, res) => {
  res.send(`User ID is ${req.params.id}`);
});
```

If you visit:

```
http://localhost:3000/user/123
```

Response:

```
User ID is 123
```

👉 Use Case: When the data is part of the resource identity (like user ID, product ID).

---

## 🔑 Difference Between Query & Route Params

| Feature           | Query Params (`req.query`)                | Route Params (`req.params`)    |
| ----------------- | ----------------------------------------- | ------------------------------ |
| Location          | After `?` in URL                          | Inside URL path                |
| Syntax            | `/products?category=books&sort=asc`       | `/user/123`                    |
| Access in Express | `req.query.key`                           | `req.params.key`               |
| Mandatory?        | ❌ Optional                               | ✅ Usually required            |
| Best For          | Searching, filtering, sorting, pagination | Identifying specific resources |
| Example           | `/search?keyword=apple`                   | `/product/42`                  |

---

## ✅ When to Use

- **Use Query Params** when you are passing optional, dynamic filters (search, sort, pagination).
- **Use Route Params** when the value is required to identify the resource (user ID, product ID).

---

## ▶️ Run the Project

1. Install dependencies:

   ```bash
   npm install express
   ```

2. Run server:

   ```bash
   node index.js
   ```

3. Test endpoints:
   - `http://localhost:3000/product?category=books&type=fiction`
   - `http://localhost:3000/p?a=shoes&id=123`
   - `http://localhost:3000/user/42` (if route added for params)

---

## 📌 Summary

- Use **Query Params** for optional filters.
- Use **Route Params** when the value is part of the resource path.
- Both are useful depending on context.
