import jwt from "jsonwebtoken";
import { User } from "../../models/userModels.js";

export const isLoggedIn = async (req, res, next) => {
  const token = req.headers["x-access-token"];
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    const email = decoded.email;
    const user = await User.findOne({ email: email });
    console.log(user)
  } catch (error) {
    console.log(error);
    return res.json({ status: "error", error: "invalid token" });
  }
  next();
};

export const authRole = (role) => {
  return (req, res, next) => {
    const token = req.headers["x-access-token"];
    const decoded = jwt.verify(token, process.env.SECRET);
    const roles = decoded.roles;
    console.log(roles)
    if (!(roles.includes(role))) {
      res.status(401);
      return res.send("Not allowed");
    }
    next();
  };
};
