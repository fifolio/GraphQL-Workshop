import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Hello from "./components/Hello";
import HelloUser from "./components/HelloUser";

// creates a new object of the "ApolloClient" class and sets it up for use in a React application.
// An object is passed to the constructor of the "ApolloClient" class with two properties:
const client = new ApolloClient({
  // "uri" - this specifies the URL for the GraphQL API endpoint that the client will connect to.
  uri: "http://localhost:3000/graphql",
  // "cache" - this is an instance of the "InMemoryCache" class, which is used to store the results of GraphQL queries and mutations in memory, allowing for quick retrieval and reuse without making additional network requests.
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
      {/* Provide the Client to all my application */}
      <ApolloProvider client={client}>
        <Hello />
        <HelloUser name="Jemmy" />
      </ApolloProvider>
    </div>
  );
}

export default App;
