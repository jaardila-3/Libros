import { useLoaderData } from "react-router-dom";
import Navbar from "../molecules/Navbar";

export default function Users() {
  // fetch the data from the "loader" of the routes in main.jsx
  const user = useLoaderData();

  return (
    <>
      <Navbar />
      <div>
        <h1>{user.name}</h1>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>
    </>
  );
}
