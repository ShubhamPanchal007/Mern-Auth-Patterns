import jwt from "jsonwebtoken";
export const Roles = {
  ADMIN: "admin",
  BASIC: "basic",
};

export const verifyJwt = (req) => {
  const token = req.headers["x-access-token"];
  const decodedToken = jwt.verify(token, process.env.SECRET);
  return decodedToken;
};
