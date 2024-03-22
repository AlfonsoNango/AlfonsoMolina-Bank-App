import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <NavLink to="/" className="navbar-brand">
          BadBank
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggle"
          aria-controls="navbarToggle"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to={`/createaccount/`}>
                Create Account
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={`/deposit/`}>
                Deposit
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={`/withdraw/`}>
                Withdraw
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={`/alldata/`}>
                AllData
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
