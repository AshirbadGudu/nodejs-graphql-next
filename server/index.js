const colors = require("colors");
const cors = require("cors");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { connectDB } = require("./config");
const schema = require("./schema");
require("dotenv").config();

const port = process.env.PORT || 3999;

const app = express();

connectDB();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "DEV",
  })
);

app.listen(port, () =>
  console.log(`http://localhost:${port}`.bgMagenta.underline.bold)
);
