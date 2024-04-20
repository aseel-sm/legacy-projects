const router = require("express").Router();
const Register = require("../models/request.model");

router.route("/").get((req, res) => {
  Register.find()
    .then((donors) => res.json(donors))
    .catch((err) => res.status(40).json(err));
});
router.route("/add").get((req, res) => {
  var {
    requesterName,
    patientName,
    hospital,
    requiredBlood,
    mobileNumber,
    noUnit,
    requestDate,
    requiredDate,
  } = req.body;
  const requestVerified = false;
  const requestSatified = false;
  const newRequest = new Request({
    requesterName,
    patientName,
    hospital,
    requiredBlood,
    mobileNumber,
    noUnit,
    requestDate,
    requiredDate,
    requestVerified,
    requestSatified,
  });
  newRequest
    .save()
    .then((donors) => res.json(donors))
    .catch((err) => res.status(40).json(err));
});

router.route("/update/:id/:value").post((req, res) => {
  var value;
  if (req.params.value == "verified") var value = { requestVerified: true };
  else var value = { requestSatified: true };
  Register.findByIdAndUpdate(req.params.id, value)
    .then(() => res.json("requestProerty changed"))
    .catch((err) => res.status(40).json(err));
});
module.exports = router;
