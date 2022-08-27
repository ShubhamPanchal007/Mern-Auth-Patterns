import mongoose from "mongoose";
import dotenv from "dotenv";

//DOTENV
dotenv.config({ path: "./config.env" });

// Connect to DB
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Wait....\n Connection established.");
  })
  .catch((e) => console.log(e.message));
