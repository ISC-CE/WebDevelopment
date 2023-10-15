const express = require("express");
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Endpoint to accept user input
app.post("/user-input", (req, res) => {
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
