import express from "express"
import swaggerJsdoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"

const app = express()
const customCss = {
  customCss: ".swagger-ui .topbar { display: none }",
}
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Climbing Gyms",
      version: "1.0.0",
      description: "Api for climbing gyms",
      license: {
        name: "Licensed Under MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
    },
  },
  apis: ["./src/*.*"], // files containing annotations as above
  servers: [
    {
      url: "http://localhost:3000",
      description: "Development server",
    },
  ],
}

const swaggerSpec = swaggerJsdoc(options)

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, customCss))

const arrayGyms = [
  {
    id: 1,
    name: "Berta Block",
    location: {
      city: "Berlin",
      address: "Mühlenstraße 62",
      postCode: "13187",
      country: "Germany",
    },
  },
  {
    id: 2,
    name: "BoulderKlub",
    location: {
      city: "Berlin",
      address: "Ohlauer Str. 38",
      postCode: "10999",
      country: "Germany",
    },
  },
  {
    id: 3,
    name: "The Castle",
    location: {
      city: "London",
      address: "Green Lanes",
      postCode: "N4 2HA",
      country: "United Kingdom",
    },
  },
]

/**
 * @openapi
 *
 * /gyms:
 *    get:
 *      summary: Retrieve all possible Gyms.
 *      description: Retrieve all possible Gyms.
 *      responses:
 *        200:
 *          description: Returns all the gyms
 *          content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The Gyms ID.
 *                     example: 1
 *                   name:
 *                     type: string
 *                     description: The gyms name.
 *                     example: The Castle
 *                   location:
 *                     type: object
 *                     properties:
 *                       city:
 *                         type: string
 *                         description: The Gyms city
 *                         example: London
 *
 */

app.get("/gyms", (req, res) => {
  return res.send(Object.values(arrayGyms))
})

/**
 * @openapi
 *
 * /gyms/{id}:
 *   get:
 *     summary: Retrieve a single Gym.
 *     description: Retrieve a single Gym.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the gym to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single gym.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The Gyms ID.
 *                   example: 1
 *                 name:
 *                   type: string
 *                   description: The gyms name.
 *                   example: The Castle
 *                 location:
 *                   type: object
 *                   properties:
 *                     city:
 *                       type: string
 *                       description: The Gyms city
 *                       example: London
 */

app.get("/gyms/:gymId", (req, res) => {
  return res.send(arrayGyms.find((x) => x.id === +req.params.gymId))
})

const port = 3000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

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
