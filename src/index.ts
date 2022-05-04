import express from "express";

const app = express();

// middleware
const hello = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.log("hello middleware");
  next();
};

// route /hello
app.use("/hello", hello);

app.get("/hello", (req, res) => {
  console.log("204 NICE");
  res.status(204);
  res.end();
});

/* app.use("/", hello); */

// route /
app.get("/", (req, res) => {
  res.send("hello world");
});

const cb1 = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.log("CB1");
  next();
};

const cb2 = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.log("cb2");
  next();
};

const cb3 = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.log("cb3");
  res.send("hello from C!");
};

// route /array
app.get("/array", [cb1, cb2, cb3]);

/* app.post("/", (req, res) => {
  res.send("POST request to the homepage");
}); */

app.listen(9000, () => {
  console.log("listening on 9000 :)");
});
