import { gql, useQuery, useMutation } from "@apollo/client";
import { useState } from "react";

const GET_CLIENTS = gql`
  query getClients {
    clients {
      id
      name
      email
      phone
    }
  }
`;

const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      name
      id
    }
  }
`;

export default function Home() {
  const [cId, setCID] = useState("");
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: cId },
  });
  const { loading, error, data } = useQuery(GET_CLIENTS);
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  return (
    <>
      <pre>{loading ? "Loading" : JSON.stringify(data, null, 2)}</pre>
      <input value={cId} onChange={(e) => setCID(e.target.value)} />
      <button onClick={deleteClient}>Delete</button>
    </>
  );
}
