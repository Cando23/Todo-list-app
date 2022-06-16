const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const taskRouter = require("./routes/task.routes");
const userRouter = require("./routes/user.routes");
const bodyParser = require("body-parser");
const errorMiddleware = require("./middlewares/error.middleware");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const port = process.env.PORT;
app.use(
  cors({
    credentials: true,
    origin: process.env.ORIGIN,
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());
app.use("/api/users/", userRouter);
app.use("/api/tasks/", taskRouter);
app.use(errorMiddleware.notFoundError);
app.use(errorMiddleware.internalServerError);
async function start() {
  await app.listen(port, async () => {
    await mongoose.connect(process.env.DB_CONNECTION);
    console.log(`app listening on port ${port}`);
  });
}
start();
