//ENV Configuration
require("dotenv").config();

// SERVER
const server = require("./api/server.js");
const connectMongoDB = require("./config/connectMongoDB");

// PORT
const PORT = process.env.PORT || 9001;

// Connect to MongoDB
// Must whitelist IP address for those connecting to the database
connectMongoDB();

// LISTENING
server.listen(PORT, () => {
  console.log(`*** \n\tServer listening on http://localhost:${PORT} \n***`);
});
