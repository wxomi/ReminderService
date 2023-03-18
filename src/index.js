const express = require("express");
const { PORT } = require("./config/serverConfig");
const jobs = require("./utils/job");
const apiRoutes = require("./routes/index");

const setupAndStartServer = async () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);
  app.listen(PORT, () => {
    jobs();
    console.log("Server started at Port: ", PORT);
  });
};

setupAndStartServer();
