import { Router } from "express";
import { Roles } from "../utils.js";
import {
  getAdminLevelQuotes,
  getQuotes,
  logUser,
  registerUser,
} from "../Controllers/controllers.js";
import {
  authRole,
  isLoggedIn,
} from "../Controllers/Middlewares/middlewares.js";
const routes = Router();

routes.post("/register", registerUser);
routes.post("/login", logUser);
routes.get(
  "/Adminquote",
  isLoggedIn,
  authRole(Roles.ADMIN),
  getAdminLevelQuotes
);
routes.get("/basicQuotes", isLoggedIn, authRole(Roles.BASIC), getQuotes);
export default routes;
