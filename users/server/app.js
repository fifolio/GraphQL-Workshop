//* CONNECT TO MONGOOSE----------------------------------
const {default: mongoose} = require("mongoose");

const MONGODB_URL = "mongodb+srv://firas2todo:firas2todo@todocluster.8frkzhm.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true
})
.then(() => console.log("MongoDB Connection Successfully"))
.catch((err) => console.log("This is MongoDB Err:", err))

//* CONNECT EXPRESS -------------------------------------
const express = require("express");
const app = express();
const PORT = 3000;

//* CONNECT APOLLO SERVER -------------------------------
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

