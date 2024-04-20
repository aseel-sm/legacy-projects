const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const donorSchema = new Schema(
  {
    username: { type: String, required: true },
    age: {
      type: Number,
      require: true,
    },
    fullName: {
      type: String,
      require: true,
    },
    gender: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    dept: {
      type: String,
      required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
    },

    phoneNumber: {
      type: Number,
      required: true,
      maxlength: 10,
    },
    email: {
      type: String,
      required: true,
    },

    lastDonateDate: { type: Date },
    nextDonateDate: { type: Date },
    verified: { type: Boolean },
  },

  { timestamp: true }
);

const donorList = mongoose.model("donorList", donorSchema);

module.exports = donorList;
