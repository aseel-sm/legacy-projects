const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requestSchema = new Schema(
  {
    requesterName: {
      type: String,
      required: true,
    },
    patientName: {
      type: String,
      required: true,
    },
    hospital: { type: String, required: true },
    requiredBlood: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: Number,
      required: true,
    },
    noUnit: {
      type: Number,
      required: true,
    },
    requestDate: {
      type: Date,
    },
    requiredDate: { type: Boolean },
    requestVerified: { type: Boolean },
    requestSatified: { type: Boolean },
  },
  { timestamp: true }
);

const requestList = mongoose.model("requestList", requestSchema);

module.exports = requestList;
