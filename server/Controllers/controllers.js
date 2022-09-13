import { User } from "../models/userModels.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { verifyJwt } from "../utils.js";
dotenv.config({ path: "../config.env" });
// Register User
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const foundUser = User.findOne({ email });
    if (foundUser) {
      res.json({ message: "dupllicate email" });
    } else {
      const user = await User.create({
        name,
        email,
        password,
      });
      res.send(user);
    }
  } catch (error) {
    res.send(error.message);
  }
};

// Log User
export const logUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (user) {
    const roles = user.roles;
    if (user.password == password) {
      const token = jwt.sign(
        {
          email,
          roles,
        },
        process.env.SECRET
      );
      return res.json({ status: "ok", user: token });
    }
  } else {
    return res.json({ status: "User Doesn't exist!" });
  }
};
export const getQuotes = async (req, res) => {
  try {
    const decoded = verifyJwt(req);
    const email = decoded.email;
    const user = await User.findOne({ email: email });
    user.quote = "To finish a project early, you should start it early!";
    return res.json({ status: "ok", quote: user.quote });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: "Bad token getting quotes" });
  }
};

export const getAdminLevelQuotes = async (req, res) => {
  try {
    const decoded = verifyJwt(req);
    const email = decoded.email;
    const user = await User.findOne({ email: email });
    user.quote =
      "Even if you're the best of the best their's always a faillure";
    return res.json({ status: "ok", quote: user.quote });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: "Bad Token getting admin quotes" });
  }
};
