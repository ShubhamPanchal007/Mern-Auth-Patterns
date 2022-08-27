import { User } from "../models/userModels.js";

// Register User
export async function registerUser(req, res) {
  try {
    console.log(req.body);
    const { name, email, password } = req.body;
    const user = await User.create({
      name,
      email,
      password,
    });
    res.send(user);
  } catch (error) {
    res.send(error.message);
  }
}

// Log User
export async function logUser(req, res) {
  const { email, password } = req.body;
  const user = User.findOne({ email, password });
  if (user) {
    res.send({ status: "ok" });
  } else {
    res.send({ status: "User Doesn't exist!" });
  }
}
