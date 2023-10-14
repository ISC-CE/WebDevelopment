const express = require("express");
const app = express();

// Define your favorite city
const favoriteCity = "YourFavoriteCity";

// Middleware to log the favorite city to the terminal
app.use((req, res, next) => {
  console.log(`My favorite city is ${favoriteCity}`);
  next(); // Continue processing the request
});

// Define a route to test the middleware
app.get("/", (req, res) => {
  res.send("Express Middleware Example");
});

// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
