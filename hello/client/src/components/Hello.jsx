import { gql, useQuery } from "@apollo/client";

// Setting up the const "QUERY" as GraphQL data receiver  
const QUERY = gql`
  query {
    hello
  }
`;

export default function Hello() {

  // let {useQuery} use "QUERY" and save the data each by its type
  const { loading, error, data } = useQuery(QUERY);

  return (
    <>
      <h1>{loading && <p>Query is loading...</p>}</h1>
      <h1>{data && <p>Data: {data.hello} </p>}</h1>
      <h1>{error && <p>Error: {error} </p>}</h1>
    </>
  );
}
