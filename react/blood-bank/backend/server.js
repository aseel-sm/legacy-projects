const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connected");
});

const usersRouter = require("./routes/users");
app.use("/user", usersRouter);

const registerRouter = require("./routes/registers");
app.use("/register", registerRouter);

const requestRouter = require("./routes/requests");
app.use("/request", requestRouter);

app.listen(port, () => {
  console.log(`Sever on port: ${port}`);
});
