import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";

const { json, urlencoded } = bodyParser;

export const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send({ message: "Hello" });
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send({ message: "ok" });
});

export const start = () => {
  app.listen(8080, () => {
    console.log(`Server running on port 8080`);
  });
};
