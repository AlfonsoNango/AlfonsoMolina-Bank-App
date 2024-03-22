import { Link } from "react-router-dom";

export default function Legend() {
  return (
    <h6>
      create a new <Link to={`/createaccount/`}>account</Link>
      <span className="badge text-bg-secondary"></span>
    </h6>
  );
}
