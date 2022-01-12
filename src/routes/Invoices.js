import React from "react";
import { getInvoices } from "../db/data";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";

export default function Invoices() {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div
      className="container text-center bg-light mt-4 rounded p-2 shadow "
      style={{ maxWidth: "700px" }}
    >
      <h4 className="display-4 px-3 fw-bold pb-3" >Invoices</h4>
      <div className="row">
        <nav className="col">
          <input
            className="rounded-pill w-100 p-2 "
            value={searchParams.get("filter") || ""}
            onChange={(e) => {
              let filter = e.target.value;
              filter ? setSearchParams({ filter }) : setSearchParams({});
            }}
            placeholder="Search"
          />

          {invoices
            .filter((invoice) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = invoice.name.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map((invoice) => (
              <NavLink
                to={`/invoices/${invoice.number}`}
                key={invoice.number}
                className={({ isActive }) =>
                  isActive
                    ? "d-flex shadow nav-link btn rounded-pill bg-primary text-white m-2 my-3"
                    : "d-flex shadow nav-link btn rounded-pill bg-white m-2 my-3"
                }
              >
                <i className="bi bi-envelope-exclamation-fill   me-2"></i>
                {invoice.name}
              </NavLink>
            ))}
        </nav>
        <Outlet />
      </div>
    </div>
  );
}
