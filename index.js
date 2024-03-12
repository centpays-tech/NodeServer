const express = require("express");
const bodyParser = require("body-parser");
const ClientRoutes = require("./src/routes/clientroute");
const UserRoutes = require("./src/routes/userroute");

require("./src/config/database");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use("/", ClientRoutes);
app.use("/", UserRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
