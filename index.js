const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

const port = process.env.PORT || 5000;

//Routes
const postRouter = require("./routes/posts");

app.use(express.json());
app.use("/post", postRouter);

//DB Connection
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected "));

app.listen(port, () => console.log("app running successfully"));
