import { useQuery, gql } from "@apollo/client";

// const username = "Bob";
// const QUERY = gql`
//   query {
//     helloWithName(name: "${username}")
//   }
// `;

const QUERY = gql`
  query HelloUserFunction($username: String!) {
    helloWithName(name: $username)
  }
`;

export default function HelloUser(props) {
  const { name } = props;
  const { loading, error, data } = useQuery(QUERY, {
    variables: {
      username: name,
    },
  });
  return (
    <>
      {error && <h1>Error: {error}</h1>}
      {loading && <h1>Query is loading...</h1>}
      {data && <h1>Data from server: {data.helloWithName}</h1>}
    </>
  );
}
