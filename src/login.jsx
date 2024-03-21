import Card from "./card.jsx";
import { useState, useContext } from "react";
import { UserContext } from "./main.jsx";

export default function Login() {
  const ctx = useContext(UserContext);
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const userEmail = ctx.users[0].email;
  console.log(userEmail);
  const userPassword = ctx.users[0].password;
  console.log(userPassword);
  const userName = ctx.users[0].name;

  function validate(field) {
    if (!field) {
      setStatus("Error");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (email === userEmail && password === userPassword) {
      ctx.users[0].isLogged = "true";
      setIsLogged(true);
      setStatus("logged");
      setTimeout(() => setStatus(""), 3000);
      return true;
    } else {
      setStatus("wrong credentials");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
  }

  function handleLogin() {
    console.log(email, password);
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
  }

  return (
    <Card
      bgcolor="secondary"
      header="Login"
      status={status}
      body={
        isLogged ? (
          <>
            <h5>Welcome {userName}, now you are logged</h5>

            <button type="submit" className="btn btn-light">
              clik here to unlog
            </button>
          </>
        ) : (
          <>
            <br />
            Email address
            <br />
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br />
            Password
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleLogin}
              disabled={!email || !password}
            >
              Login
            </button>
          </>
        )
      }
    />
  );
}
