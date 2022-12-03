const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
require("dotenv").config();

const port = process.env.PORT || 3999;

const app = express();

app.use(
  "graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.DEV === "DEV",
  })
);

app.listen(port, () => console.log(`http://localhost:${port}`));
