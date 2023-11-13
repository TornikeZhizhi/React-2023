import React from "react";
import Friend from "./Friend";

function FriendList({ initialFriends, handleSelection, selectFriend }) {
  const friends = initialFriends;

  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          handleSelection={handleSelection}
          selectFriend={selectFriend}
        />
      ))}
    </ul>
  );
}

export default FriendList;
