import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.DB_URL;

export const connect = (url = uri, opts = {}) => {
  return mongoose.connect(url, { ...opts, useNewUrlParser: true });
};
