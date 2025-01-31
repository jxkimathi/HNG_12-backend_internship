/**
 * Develop a public API that returns the following information in JSON format:
 *  - Your registered email address (used to register on the HNG12 Slack workspace).
 *  - The current datetime as an ISO 8601 formatted timestamp.
 *  - The GitHub URL of the project's codebase.
 */

const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3000;

// Create the app
const app = express();

// Enable CORS
app.use(cors());

// Endpoint to get basic information
app.get("/api/info", (req, res) => {
  const info = {
    email: "judekimathii@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://www.github.com/jxkimathi/HNG_12-backend_internship"
  };

  return res.json(info);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
