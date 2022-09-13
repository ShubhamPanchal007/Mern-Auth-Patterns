import { User } from "../../models/userModels.js";
import { verifyJwt } from "../../utils.js";

export const isLoggedIn = async (req, res, next) => {
  try {
    const decoded = verifyJwt(req);
    const email = decoded.email;
    await User.findOne({ email: email });
  } catch (error) {
    return res.json({ status: "error", error: "invalid token while login" });
  }
  next();
};

export const authRole = (role) => {
  return (req, res, next) => {
    const decoded = verifyJwt(req);
    const roles = decoded.roles;
    if (!roles.includes(role)) {
      res.status(401);
      return res.json({ status: "error", error: "invalid token while authrole" });
    }
    next();
  };
};
