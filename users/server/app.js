const express = require("express");
const app = express();
const PORT = 3000;

const { ApolloServer } = require("apollo-server-express");
const resolvers = require("./resolvers");
const typeDefs = require("./typeDefs");
const users = require("./database");

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
      users,
    },
  });

  await server.start();
  server.applyMiddleware({ app });
  app.listen(PORT, () => {
    console.log(`Express Running on port ${PORT}`);
    console.log(`Apollo Server Running at ${PORT}${server.graphqlPath}`);
  });
}
startServer();
