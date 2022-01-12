import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getInvoice, deleteInvoice } from "../db/data";

export default function Invoice() {
  let navigate = useNavigate();
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));

  return (
    <section className="col">
      {/* <h2>invoice ####</h2> */}
      {/* <h2>invoice : {params.invoiceId}</h2> */}
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          {invoice.name} : {invoice.number}
        </div>
        <div className="card-body">
          <h5 className="card-title">Total Due: {invoice.amount}</h5>
          <p className="card-text">Due Date: {invoice.due}</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              deleteInvoice(invoice.number);
              navigate("/invoices");
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </section>
  );
}
