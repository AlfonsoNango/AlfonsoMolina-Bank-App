import Card from "./card";

export default function Deposit() {
  return (
    <Card
      bgcolor="success"
      header="Deposit"
      // status={status}
      body={
        <>
          <p>Balance</p>
          Deposit Amount
          <br />
          <input
            type="input"
            className="form-control"
            id="deposit"
            placeholder="Deposit Amount"
            // value={name}
            // onChange={(e) => setName(e.currentTarget.value)}
          />
          <br />
          <button
            type="submit"
            className="btn btn-light"
            // onClick={handleCreate}
          >
            Deposit
          </button>
        </>
      }
    />
  );
}
