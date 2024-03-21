import { useContext } from "react";
import { UserContext } from "./main.jsx";

export default function AllData() {
  const ctx = useContext(UserContext);
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Mail</th>
            <th scope="col">Password</th>
            <th scope="col">Balance</th>
            <th scope="col">isLogged</th>
          </tr>
        </thead>

        <tbody>
          {ctx.users.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>{item.balance}</td>
              <td>{item.isLogged}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
