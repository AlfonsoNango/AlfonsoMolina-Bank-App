import Card from "./card.jsx";
import { useState, useContext } from "react";
import { UserContext } from "./main.jsx";

export default function Login() {
  const ctx = useContext(UserContext);
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const initialStatus = () => {
    if (ctx.users[0].isLogged === "true") return true;
  };

  const [isLogged, setIsLogged] = useState(initialStatus);

  const userEmail = ctx.users[0].email;
  const userPassword = ctx.users[0].password;
  const userName = ctx.users[0].name;

  function validate(field) {
    if (!field) {
      setStatus("Error");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (email === userEmail && password === userPassword) {
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
    ctx.users[0].isLogged = "true";
    setIsLogged(true);
  }

  function handleLogout() {
    ctx.users[0].isLogged = "false";
    setIsLogged(false);
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

            <button
              onClick={handleLogout}
              type="submit"
              className="btn btn-light"
            >
              click here to log out
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
