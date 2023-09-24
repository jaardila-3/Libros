import { useLoaderData } from "react-router-dom";
import Navbar from "../molecules/Navbar";
import { useHttp } from "../../customHooks/fetchHttp";
import { useEffect } from "react";

export default function Users() {
  // fetch the data from the "loader" of the routes in main.jsx
  const userId = useLoaderData();
  const { isLoading, error, data, sendRequest } = useHttp();

  useEffect(() => {
    sendRequest(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }, [userId, sendRequest]);

  /*
    * Example sendRequest with method "POST"
    sendRequest("https://jsonplaceholder.typicode.com/users", "POST", {
      name: "John Doe",
      email: "d4r3N@example.com",
      phone: "555-555-5555"
    });
  */

  return (
    <>
      <Navbar />
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {!isLoading && data && (
        <div>
          <h1>{data.name}</h1>
          <p>Email: {data.email}</p>
          <p>Phone: {data.phone}</p>
        </div>
      )}
    </>
  );
}
