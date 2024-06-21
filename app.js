const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const graphqlSchema = require('./graphql/schema');
const graphqlResolver = require('./graphql/resolvers');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

const PORT = 8000;

dotenv.config();
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
  }),
);

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).send({ message: 'Invalid JSON Format' });
  } else {
    next(err);
  }
});

app.use((req, res) => {
  return res.status(400).send({ message: 'Bad Request' });
});

app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT} Port!`);
});
