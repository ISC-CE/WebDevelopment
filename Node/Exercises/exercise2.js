const express = require("express");
const app = express();

// Define your favorite city
const favoriteCity = "YourFavoriteCity";

// Define a route to test the middleware
app.get("/", (req, res) => {
  res.send("Express Middleware Example");
});

// Endpoint to accept user input
app.post("/user-input", (req, res) => {
  // Assuming the input is sent as JSON: { "input": "User's input here" }
  const userInput = req.body.input;

  // Log the user input to the console
  console.log(`User input: ${userInput}`);

  // Respond with a status code of 200 and a friendly message
  res.status(200).json({ message: "Input received and logged successfully." });
});

// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/**
 * Test the endpoint with below
 * curl -X POST -H "Content-Type: application/json" -d '{"input": "User's input here"}' http://localhost:3000/user-input
 */
