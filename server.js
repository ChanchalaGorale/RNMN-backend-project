const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
app.use(cors());

//cors
if (process.env.NODE_ENV == "developement") {
  app.use(
    cors({
      origin: `${process.env.CLIENT_URL}`,
    })
  );
}

//
//mongodb
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DATABASE connected!!!"));

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

const blogRoute = require("./routes/blog");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const categoryRoute = require("./routes/category");
const tagRoute = require("./routes/tag");

//routes middleware
app.use("/api", blogRoute);
app.use("/api", authRoute);
app.use("/api", userRoute);
app.use("/api", categoryRoute);
app.use("/api", tagRoute);

//listening server
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(` Server in running on ${port}!!!`);
});
