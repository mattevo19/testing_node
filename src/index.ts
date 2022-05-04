import express from "express";

const app = express();

// middleware
const hello = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.log("hello middleware");
  next();
};

app.use("/hello", hello);

app.get("/hello", (req, res) => {
  console.log("204 NICE");
  res.status(204);
  res.end();
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(9000, () => {
  console.log("listening on 9000 :)");
});
