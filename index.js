const express = require("express");
const cors = require("cors"); // Import the cors middleware
const MapFunc = require("./map");

const app = express();

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

// Define your routes
app.post("/", MapFunc.search);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
