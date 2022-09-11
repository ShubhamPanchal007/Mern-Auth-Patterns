import { User } from "../models/userModels.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken"
dotenv.config({ path: "../config.env" });
// Register User
export const registerUser = async (req, res) => {
  try {
    console.log(req.body);
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
    const token  = jwt.sign({
      email,
    },process.env.SECRET)
    return res.json({ status: "ok" ,user:token});
  } else {
    return res.json({ status: "User Doesn't exist!" });
  }
};
export const getQuotes = async (req, res) => {
	const token = req.headers['x-access-token']
	try {
		const decoded = jwt.verify(token, process.env.SECRET)
		const email = decoded.email
		const user = await User.findOne({ email: email })
    user.quote = "To finish a project early, you should start it eary!"
		return res.json({ status: 'ok', quote: user.quote })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
}