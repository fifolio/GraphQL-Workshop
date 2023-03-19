// Import and Setup the (Express) framework
const express = require("express");
const port = 3000;
// Import Apollo Server & GQL
const { ApolloServer, gql } = require("apollo-server-express");

// define the shape of the data in GQL schema using {typeDefs}
// set the {resolves} functions that are used to resolve values of fields in the GQL
const typeDefs = gql`
  type Query {
    hello: String!
  }
`;
const resolvers = {
  Query: {
    hello: () => {
      return "hello from server";
    },
  },
};

async function startServer() {
  const app = express();
  // make a new object from ApolloServer Class called "Server" that takes the custom schema and resolve functions that been defined
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  // This code appears to be using the Apollo Server library to apply middleware to an existing Express application (app).
  server.applyMiddleware({ app });

  app.listen(port, () => {
    console.log("Express connected");
    console.log(`Apollo connected, ${port}${server.graphqlPath}`);
  });
}
startServer();
