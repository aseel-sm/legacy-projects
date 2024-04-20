const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userType: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const userList = mongoose.model("user_name_data", usersSchema);

module.exports = userList;
