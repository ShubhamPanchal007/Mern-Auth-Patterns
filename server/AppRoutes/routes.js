import { Router } from "express";
import { getQuotes, logUser, registerUser } from "../Controllers/controllers.js";
const routes = Router();

routes.post("/register", registerUser);
routes.post("/login", logUser);
routes.get('/quote',getQuotes)
export default routes;
