const express = require("express");
const mongoose = require("mongoose"); // Import Mongoose
const app = express();

// Connect to MongoDB (replace <YourMongoDBURI> with your MongoDB URI)
mongoose
  .connect("<YourMongoDBURI>", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Create a Mongoose schema
const userInputSchema = new mongoose.Schema({
  input: String,
});

// Create a Mongoose model
const UserInput = mongoose.model("UserInput", userInputSchema);

// Middleware to parse JSON requests
app.use(express.json());

// Endpoint to accept user input and store it in the database
app.post("/user-input", async (req, res) => {
  const userInputText = req.body.input;

  try {
    // Create a new document and save it to the database
    const newUserInput = new UserInput({ input: userInputText });
    await newUserInput.save();

    // Log the user input to the console
    console.log(`User input: ${userInputText}`);

    // Respond with a status code of 200 and a friendly message
    res
      .status(200)
      .json({ message: "Input received, logged, and saved to the database." });
  } catch (error) {
    console.error("Error saving user input to the database:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
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
