import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

export default function BillSplit({ selectedFriend, onSplitBill }) {
  const [totalBill, setTotalBill] = useState("");
  const [yourExponse, setYourExponse] = useState("");
  const paidByFriend = totalBill ? totalBill - yourExponse : "";
  const [whoPay, setWhoPay] = useState("you");

  function handelSubmit(e) {
    e.preventDefault();
    if (!totalBill || !yourExponse) return;
    onSplitBill(whoPay === "you" ? paidByFriend : -yourExponse);
  }

  return (
    <form className="form-split-bill" onSubmit={handelSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <Input
        type="number"
        connect="billAmount"
        defaultValue={totalBill}
        onChange={(e) => setTotalBill(+e.target.value)}
      >
        💰 Bill value
      </Input>
      <Input
        type="number"
        connect="yourExponse"
        defaultValue={yourExponse}
        onChange={(e) =>
          setYourExponse(
            +e.target.value > totalBill ? totalBill : +e.target.value
          )
        }
      >
        🧍‍♀️ Your expense
      </Input>
      <Input
        type="number"
        connect="friendExponse"
        defaultValue={paidByFriend}
        disabled
      >
        👫 {selectedFriend.name}'s expense
      </Input>

      <label htmlFor="whoPay">🤑 Who is paying the bill</label>
      <select
        id="whoPay"
        onChange={(e) => setWhoPay(e.target.value)}
        value={whoPay}
      >
        <option value="you">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
