const express = require("express");
const { bookingModel } = require("../models/booking.model");
const bookingRoute = express.Router();

//POST route
bookingRoute.post("/book", async (req, res) => {
  try {
    const { guest_name, checkin_date, checkout_date, room_type, room_number } =
      req.body;
    const newBooking = new bookingModel({
      guest_name: guest_name,
      checkin_date: checkin_date,
      checkout_date: checkin_date,
      room_type: room_type,
      room_number: room_number,
    });
    await newBooking.save();
    res.status(200).send({ msg: "New booking is created" });
  } catch (error) {
    res.status(400).send({ msg: error.msg });
  }
});

//first GET route
bookingRoute.get("/bookings", async (req, res) => {
  try {
    const getBook = await bookingModel.find();
    res.status(200).send(getBook);
  } catch (error) {
    res.status(400).send({ msg: error.msg });
  }
});
// GET by id route
bookingRoute.get("/booking/:bookingID", async (req, res) => {
  const bookingID = req.params.bookingID;
  console.log(bookingID);
  try {
    const getBook = await bookingModel.find({ _id: bookingID });
    res.status(200).send(getBook);
  } catch (error) {
    res.status(400).send({ msg: error.msg });
  }
});
// GET by dateRange route
bookingRoute.get("/bookings/date-range", async (req, res) => {
  const checkIn_date = req.query.checkin_date;
  const checkOut_date = req.query.checkout_date;
  console.log(new Date(checkIn_date), new Date(checkIn_date));
  try {
    // const getBook = await bookingModel.find({
    //   // checkin_date: { $gte: "1999-02-15" },
    //   // checkout_date: { $lte: "2005-02-14" },
    //   checkin_date: { $gte: checkIn_date },
    //   checkout_date: { $lte: checkOut_date },
    // });

    const hooper = await bookingModel.aggregate([
      {
        $match: {
          checkin_date: { $gte: new Date(checkIn_date) },
          checkout_date: { $lte: new Date(checkOut_date) },
        },
      },
    ]);
    res.status(200).send(hooper);
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: error.msg });
  }
});

// GET earning by  dateRange route
bookingRoute.get("/earnings/date-range", async (req, res) => {
  const checkIn_date = req.query.checkin_date;
  const checkOut_date = req.query.checkout_date;
  console.log(checkIn_date, checkOut_date);
  try {
    const getdeluxEarning = await bookingModel.aggregate([
      {
        $match: {
          checkin_date: { $gte: new Date(checkIn_date) },
          checkout_date: { $lte: new Date(checkOut_date) },
          room_type: "Delux",
        },
        // $group: {
        //   _id: null,
        //   numOfData: { $sum: 1 },
        // },
      },
    ]);
    let totala = 0;
    for (let i = 0; i < getdeluxEarning.length; i++) {
      totala +=
        getdeluxEarning[i].checkout_date.getTime() -
        getdeluxEarning[i].checkin_date.getTime();
    }
    console.log(totala / (3600 * 1000 * 24), getdeluxEarning.length, "first");
    const getstandardEarning = await bookingModel.aggregate([
      {
        $match: {
          checkin_date: { $gte: new Date(checkIn_date) },
          checkout_date: { $lte: new Date(checkOut_date) },
          room_type: "Standard",
        },
        // $group: {
        //   _id: null,
        //   numOfData: { $sum: 1 },
        // },
      },
    ]);
    let totalb = 0;
    for (let i = 0; i < getstandardEarning.length; i++) {
      totalb +=
        getstandardEarning[i].checkout_date.getTime() -
        getstandardEarning[i].checkin_date.getTime();
    }
    console.log(
      totalb / (3600 * 1000 * 24),
      getstandardEarning.length,
      "another"
    );
    const getpremiumEarning = await bookingModel.aggregate([
      {
        $match: {
          checkin_date: { $gte: new Date(checkIn_date) },
          checkout_date: { $lte: new Date(checkOut_date) },
          room_type: "Premium",
        },
      },
    ]);
    let totalc = 0;
    for (let i = 0; i < getpremiumEarning.length; i++) {
      totalc +=
        getpremiumEarning[i].checkout_date.getTime() -
        getpremiumEarning[i].checkin_date.getTime();
    }

    console.log(totalc / (3600 * 1000 * 24), getpremiumEarning.length, "done");
    let totalEarning = 1200 * totalb + 2300 * totalc + 4650 * totala;
    console.log(totalEarning);
    const hooper = await bookingModel.aggregate([
      {
        $match: {
          checkin_date: { $gte: new Date(checkIn_date) },
          checkout_date: { $lte: new Date(checkOut_date) },
        },
      },
    ]);
    res.status(200).send({ msg: "total amount is " + totalEarning });
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: error.msg });
  }
});
//checkin_date=1999-02-15
//checkout_date=2012-02-14
//PUT route

bookingRoute.put("/booking/:bookingID", async (req, res) => {
  const bookingID = req.params.bookingID;
  console.log(bookingID);
  try {
    await bookingModel.findByIdAndUpdate(bookingID, req.body);
    res.status(200).send({ msg: "booking is updated" });
  } catch (error) {
    res.status(400).send({ msg: error.msg });
  }
});

//DELETE route

bookingRoute.delete("/booking/:bookingID", async (req, res) => {
  const bookingID = req.params.bookingID;
  console.log(bookingID);
  try {
    await bookingModel.findByIdAndDelete(bookingID);
    res.status(200).send({ msg: "booking is deleted" });
  } catch (error) {
    res.status(400).send({ msg: error.msg });
  }
});
module.exports = { bookingRoute };
