// Import and Setup the node server using (Express) framework
const express = require("express");
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log("Express Server running on port 3000");
});
