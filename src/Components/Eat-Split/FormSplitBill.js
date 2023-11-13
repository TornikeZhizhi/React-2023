import React, { useState } from "react";
import Button from "./Helpers/Button";

function FormSplitBill({ selectFriend, handleSplitBill }) {
  const [bill, setbill] = useState("");
  const [paydByUser, setpaydByUser] = useState("");
  const payedByFriend = bill ? bill - paydByUser : "";
  const [whoIsPaying, setwhoIsPaying] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();

    handleSplitBill(whoIsPaying === "user" ? payedByFriend : -paydByUser);
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Spli a bill With {selectFriend.name}</h2>
      <label>Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setbill(Number(e.target.value))}
      />

      <label>Your Expsense</label>
      <input
        type="text"
        value={paydByUser}
        onChange={(e) =>
          setpaydByUser(Number(e.target.value)) > bill
            ? paydByUser
            : Number(e.target.value)
        }
      />

      <label>{selectFriend.name}s Expsense</label>
      <input type="text" disabled value={Math.abs(payedByFriend)} />

      <label>Who is paying</label>

      <select
        value={whoIsPaying}
        onChange={(e) => setwhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}

export default FormSplitBill;
