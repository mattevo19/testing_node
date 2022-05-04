import express from "express";

const app = express();

const arrayGyms = [
  {
    id: 1,
    name: "Berta Block",
    location: "Berlin",
  },
  {
    id: 2,
    name: "BoulderKlub",
    location: "Berlin",
  },
  {
    id: 3,
    name: "The Castle",
    location: "London",
  },
];

app.get("/gyms", (req, res) => {
  return res.send(Object.values(arrayGyms));
});

app.get("/gyms/:gymId", (req, res) => {
  return res.send(arrayGyms.find((x) => x.id === +req.params.gymId));
});

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

/* // middleware
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

app.use("/", hello);

// route /
app.get("/", (req, res) => {
  res.send("hello world");
});

// route /array
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

app.get("/array", [cb1, cb2, cb3]);

// listening
app.listen(9000, () => {
  console.log("listening on 9000!!!");
});

app.listen(8000); */
