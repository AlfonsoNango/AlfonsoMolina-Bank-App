import Card from "./card";

export default function Withdraw() {
  return (
    <Card
      bgcolor="warning"
      header="Withdraw"
      // status={status}
      body={
        <>
          <p>Balance</p>
          Withdraw Amount
          <br />
          <input
            type="input"
            className="form-control"
            id="withdraw"
            placeholder="Withdraw Amount"
            // value={name}
            // onChange={(e) => setName(e.currentTarget.value)}
          />
          <br />
          <button
            type="submit"
            className="btn btn-light"
            // onClick={handleCreate}
          >
            Withdraw
          </button>
        </>
      }
    />
  );
}
