import { useState, useContext } from "react";
import Card from "./card";
import { UserContext } from "./main";

export default function Deposit() {
  const ctx = useContext(UserContext);
  const [status, setStatus] = useState("");
  const [deposit, setDeposit] = useState(0);
  const [balance, setBalance] = useState(ctx.users[0].balance);

  function validate(field, label) {
    if (!field || field <= 0) {
      setStatus("error " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    setStatus("Successfull Deposit");
    setTimeout(() => setStatus(""), 3000);
    return true;
  }

  function handleDeposit() {
    if (!validate(Number(deposit), "deposit")) return;
    ctx.users[0].balance = balance + Number(deposit);
    setBalance(ctx.users[0].balance);
    setDeposit(0);
  }

  return (
    <Card
      bgcolor="success"
      header="Deposit"
      status={status}
      body={
        <>
          <p>Balance {balance} </p>
          Deposit Amount
          <br />
          <input
            type="input"
            className="form-control"
            id="deposit"
            placeholder="Enter Deposit Amount"
            value={deposit}
            onChange={(e) => setDeposit(e.currentTarget.value)}
          />
          <br />
          <button
            type="submit"
            disabled={!deposit}
            className="btn btn-light"
            onClick={handleDeposit}
          >
            Deposit
          </button>
        </>
      }
    />
  );
}
