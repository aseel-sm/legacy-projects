const router = require("express").Router();
let User = require("../models/users.model");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(err));
});
router.route("/add").post((req, res) => {
  const { username, password, userType } = req.body;
  const newUser = new User({ username, password, userType });
  newUser
    .save()
    .then(() => res.json("user created"))
    .catch((err) => res.status(40).json(err));
});

router.route("/delete/:username").delete((req, res) => {
  User.findOneAndRemove((username = req.params.username))
    .then(() => res.json("user Deleted"))
    .catch((err) => res.status(40).json(err));
});
module.exports = router;
