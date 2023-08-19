const express = require("express");
const { bookingRoute } = require("./routes/booking.route");
const { connection } = require("./config/db");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use("/", bookingRoute);
app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to db");
  } catch (error) {
    console.log("Not Connected to db");
  }

  console.log("server is listening at " + process.env.port);
});
