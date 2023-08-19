const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  guest_name: String,
  checkin_date: Date,
  checkout_date: Date,
  room_type: String,
  room_number: Number,
});

const bookingModel = mongoose.model("booking", bookingSchema);

module.exports = { bookingModel };
// {
//   "guest_name": "saman",
//   "checkin_date": 12,
//   "checkout_date": 15,
//   "room_type": "single",
//   "room_number": 55
// }
// /It should have guest_name, checkin_date, checkout_date, room_type, room_number etc.
