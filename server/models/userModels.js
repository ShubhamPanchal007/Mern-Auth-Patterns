import mongoose from "mongoose";

const User = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    quote: { type: String },
  },
  { collection: "user-data" }
);
const model = new mongoose.model("UserData", User);

module.exports = model;