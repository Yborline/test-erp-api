const express = require("express");

const cors = require("cors");
const { clientRouter, projectRouter } = require("./routes/api");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/client", clientRouter);
app.use("/api/project", projectRouter);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
