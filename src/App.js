import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="navbar nav-expand navbar-dark nav-principal" >
        <ul className="navbar fs-5">
          <Link className="nav-link link-light" to="/">
            Home
          </Link>
          <Link className="nav-link link-light" to="/invoices">
            Invoices
          </Link>
          <Link className="nav-link link-light" to="/about">
            About
          </Link>
        </ul>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
