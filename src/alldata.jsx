import { useContext } from "react";
import { UserContext } from "./main.jsx";

export default function AllData() {
  const ctx = useContext(UserContext);
  return (
    <>
      {/* <h5>All Data in Store</h5>
      {JSON.stringify(ctx)}
      <br /> */}

      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Mail</th>
            <th scope="col">Password</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td scope="row">Name</td>
            <td>Mark@gmail.com</td>
            <td>Otto</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
