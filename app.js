require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const ClientRoutes = require("./src/routes/clientroute");
const UserRoutes = require("./src/routes/userroute");
const SessionRoutes = require("./src/routes/sessionsroute");
const AcquirerRoutes = require("./src/routes/acquirerroute");

require("./src/config/database");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
// app.use("", (req, res) => {
//   res.send("Welcome to Centpays");
// });
app.use("/", ClientRoutes);
app.use("/", UserRoutes);
app.use("/", SessionRoutes);
app.use("/", AcquirerRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
