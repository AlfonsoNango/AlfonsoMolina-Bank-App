import { Link } from "react-router-dom";

export default function LoginStatus() {
  return (
    <h6>
      If you have an account please <Link to={`/login/`}>log in!</Link> or
      create a <Link to={`/createaccount/`}>new one</Link>
      <span className="badge text-bg-secondary"></span>
    </h6>
  );
}
