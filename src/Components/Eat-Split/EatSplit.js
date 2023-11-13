import React, { useState } from "react";
import FriendList from "./FriendList";
import FormAddFriend from "./FormAddFriend";
import Button from "./Helpers/Button";
import FormSplitBill from "./FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function EatSplit() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);

  const [selectFriend, SetSelectFriend] = useState(null);

  const handleAddFriend = (friend) => {
    setFriends([...friends, friend]);
    setShowAddFriend(false);
  };

  const handleSelection = (friend) => {
    SetSelectFriend((curr) => (curr?.id === friend.id ? false : friend));
    setShowAddFriend(false);
  };

  const handleSplitBill = (value) => {
    console.log(value);
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  };

  return (
    <>
      <div className="sidebar">
        <FriendList
          initialFriends={friends}
          handleSelection={handleSelection}
          selectFriend={selectFriend}
        />
        {showAddFriend && <FormAddFriend handleAddFriend={handleAddFriend} />}
        <Button onClick={() => setShowAddFriend((show) => !show)}>
          {!showAddFriend ? "Add Friend" : "Close"}
        </Button>
      </div>
      {selectFriend && (
        <FormSplitBill
          selectFriend={selectFriend}
          handleSplitBill={handleSplitBill}
        />
      )}
    </>
  );
}

export default EatSplit;
