const express = require("express");
const app = express();

// Define your favorite city
const favoriteCity = "Berlin";
const favoriteCity2 = "New York";

// 1. I want all request to use this middleware
// Middleware to log the favorite city to the terminal
app.use((req, res, next) => {
  console.log(`My favorite city 1 is ${favoriteCity}`);
  next(); // Continue processing the request
});

// 1. I want only routes to /city to use this middleware
const onlyCityMiddleware = (req, res, next) => {
  console.log(`My favorite city is ${favoriteCity2}`);
  next(); // Continue processing the request
};

//Every request ot our app gets logged

// Define a route to test the middleware
app.get("/", (req, res) => {
  res.send("Express Middleware Example");
});

app.get("/city", onlyCityMiddleware, (req, res) => {
  res.send("Express Middleware Example");
});

app.get("/country", (req, res) => {
  res.send("Express Middleware Example");
});

// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
