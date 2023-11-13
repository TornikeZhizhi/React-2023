import React from "react";
import Button from "./Helpers/Button";

function Friend({ friend, handleSelection, selectFriend }) {
  const isSelected = selectFriend?.id === friend.id;
  console.log(isSelected);
  return (
    <li className={!isSelected ? "" : "select"}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} -{Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} Owes you - {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance === 0 && (
        <p>
          You owe {friend.name} - {Math.abs(friend.balance)}$
        </p>
      )}
      <Button onClick={() => handleSelection(friend)}>
        {!isSelected ? "select" : "close"}
      </Button>
    </li>
  );
}

export default Friend;
