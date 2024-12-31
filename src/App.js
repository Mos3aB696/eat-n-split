import { useState } from "react";
import FriendsList from "./components/FriendsList";
import BillSplit from "./components/BillSplit";

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

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleClickFn() {
    setShowAddFriend((prev) => !prev);
  }

  function handleAddNewFriend(newFriend) {
    setFriends((prev) => {
      return [...prev, newFriend];
    });
  }
  function handleSelectFriend(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <FriendsList
        currentFriends={friends}
        addNewFriend={handleAddNewFriend}
        onSelection={handleSelectFriend}
        selectedFriend={selectedFriend}
        showAddFriend={showAddFriend}
        handleClickFn={handleClickFn}
      />
      {selectedFriend && (
        <BillSplit
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;
