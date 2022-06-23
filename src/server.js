import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import { connect } from "./utils/db.js";

// routes
import userRouter from "./resources/user/user.router.js";
import listRouter from "./resources/list/list.router.js";

const { json, urlencoded } = bodyParser;

export const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/user", userRouter);
app.use("/api/list", listRouter);

export const start = async () => {
  try {
    await connect();
    app.listen(8080, () => {
      console.log(`Server running on port 8080`);
    });
  } catch (e) {
    console.error(e);
  }
};
