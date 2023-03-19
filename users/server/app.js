const express = require("express");
const app = express();
const PORT = 3000;

const { ApolloServer, gql } = require("apollo-server-express");
const resolvers = require("./resolvers");

const typeDefs = gql`
  type Query {
    doesItWork: Boolean!
  }
`;

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({ app });
  app.listen(PORT, () => {
    console.log(`Express Running on port ${PORT}`);
    console.log(`Apollo Server Running at ${PORT}${server.graphqlPath}`);
  });
}
startServer();
