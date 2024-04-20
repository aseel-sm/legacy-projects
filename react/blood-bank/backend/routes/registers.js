const router = require("express").Router();
const Register = require("../models/donor.models");

router.route("/").get((req, res) => {
  Register.find()
    .then((donors) => res.json(donors))
    .catch((err) => res.status(40).json(err));
});
router.route("/add").post((req, res) => {
  var {
    username,
    age,
    fullName,
    gender,
    year,
    dept,
    bloodGroup,
    phoneNumber,
    email,
    lastDonateDate,
  } = req.body;

  date = Date.parse(lastDonateDate);

  nextDonateDate = new Date(date + 7776000000);

  const verified = false;
  const newRegister = new Register({
    username,
    age,
    fullName,
    lastDonateDate,
    nextDonateDate,
    gender,
    year,
    dept,
    bloodGroup,
    phoneNumber,
    email,
    verified,
  });
  console.log("llllllllllllllllllllllllll");

  newRegister
    .save()
    .then(() => res.json("Donor Added"))
    .catch((err) => res.json(err));
});

router.route("/delete/username").delete((req, res) => {
  Register.findOneAndDelete((username = req.params.username))
    .then(() => res.json("Donor deleted"))
    .catch((err) => res.status(40).json(err));
});
router.route("/update/:id").post((req, res) => {
  Register.findByIdAndUpdate(req.params.id, {
    age,
    fullName,
    semester,
    dept,
    phoneNumber,
    email,
    district,
    pincode,
  })
    .then(() => res.json("Donor deleted"))
    .catch((err) => res.status(40).json(err));
});
router.route("/verify/:id").post((req, res) => {
  Register.findByIdAndUpdate(req.params.id, {
    verified: true,
  })
    .then(() => res.json("Donor deleted"))
    .catch((err) => res.status(40).json(err));
});
module.exports = router;
