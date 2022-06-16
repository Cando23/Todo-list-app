const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const register = async (req, res) => {
  let { login, password } = req.body;
  password = bcrypt.hashSync(password, 7);
  const newUser = new User({ login, password });
  await newUser.save((error) => {
    if (error) return res.status(400).send(error);
    return res.status(201).send("Registration completed");
  });
};
const login = async (req, res) => {
  const { login, password } = req.body;
  const user = await User.findOne({ login });
  if (!user) {
    return res.status(400).send("User not found");
  }
  const validPassword = bcrypt.compareSync(password, user.password);
  if (!validPassword) return res.status(400).send("Wrong password");
  const token = jwt.sign({ login, password, _id: user._id }, process.env.SALT);
  return res
    .cookie("token", token, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
    })
    .status(200)
    .send("Logged successfully");
};
const logout = async (req, res) => {
  return res.clearCookie("token").status(200).send("Logged out");
};
module.exports = {
  register,
  login,
  logout,
};
