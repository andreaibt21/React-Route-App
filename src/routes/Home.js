import React from "react";
import { Link } from "react-router-dom";

export default function Home({ type }) {
  return (
    <div>
      <main className="container shadow mt-5 bg-info">
        <h2 className="display-5 px-3 fw-bold p-3">In this project I learned the following:</h2>
        <ul >
          <li>Configuring Routes</li>
          <li>Navigating with Link</li>
          <li>Creating Links with active styling</li>
          <li>Using Nested Routes for Layout</li>
          <li>Using URL params for data loading</li>
          <li>Using URL Search params</li>
          <li>Navigate programmatically by deleting a invoice</li>
        </ul>
        <Link to="/Invoices" className=" display-5 px-3 fw-bold p-3 nav-link">
          Invoices
        </Link>
      </main>
    </div>
  );
}
