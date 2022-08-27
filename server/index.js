import express from "express";
import cors from "cors";
import "./DB/DBConnection.js";
import routes from "./AppRoutes/routes.js";

const app = express();
const PORT = 1337;

// will enable the express server to respond to preflight requests
app.use(cors());
// A preflight request is basically an OPTION request sent to the server before the actual request is sent, in order to ask which origin and which request options the server accepts.

// Tell server
app.use(express.json());
app.use("/api", routes);
app.get("/", (_, res) => {
  res.send("you are on HomePage");
});
app.listen(PORT, () => console.log("Running on port " + PORT));
