import Card from "./card";
import { useState, useContext } from "react";
import { UserContext } from "./main";

export default function Withdraw() {
  const ctx = useContext(UserContext);
  const [status, setStatus] = useState("");
  const [withdraw, setWithdraw] = useState(0);
  const [balance, setBalance] = useState(ctx.users[0].balance);

  function validate(field, label) {
    if (field > balance || !field || field <= 0) {
      setStatus("error " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    setStatus("Successfull Withdraw");
    setTimeout(() => setStatus(""), 3000);
    return true;
  }

  function handleWithdraw() {
    if (!validate(Number(withdraw), "withdraw")) return;
    ctx.users[0].balance = balance - Number(withdraw);
    setBalance(ctx.users[0].balance);
    setWithdraw(0);
  }

  return (
    <Card
      bgcolor="warning"
      header="Withdraw"
      status={status}
      body={
        <>
          <p>Balance {balance} </p>
          Withdraw Amount
          <br />
          <input
            type="input"
            className="form-control"
            id="withdraw"
            placeholder="Withdraw Amount"
            value={withdraw}
            onChange={(e) => setWithdraw(e.currentTarget.value)}
          />
          <br />
          <button
            type="submit"
            disabled={!withdraw}
            className="btn btn-light"
            onClick={handleWithdraw}
          >
            Withdraw
          </button>
        </>
      }
    />
  );
}
