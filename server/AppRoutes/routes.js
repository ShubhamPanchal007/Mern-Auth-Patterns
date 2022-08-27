import { Router } from "express";
import { logUser, registerUser } from "../Controllers/controllers.js";
const routes = Router();

routes.post("/register", registerUser);
routes.post("/login", logUser);
export default routes;
