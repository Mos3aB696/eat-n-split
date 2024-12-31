import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

export default function AddFriend({ onAddFriend, afterAddFriend }) {
  const [friendInfo, setFriendInfo] = useState({
    name: "",
    image: "https://i.pravatar.cc/48",
  });

  function handleFriendInfo(e) {
    setFriendInfo({
      name: e.target.value,
      image: "https://i.pravatar.cc/48",
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddFriend({ ...friendInfo, balance: 0, id: Date.now() });
    afterAddFriend();
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <Input
        type="text"
        connect="friendName"
        defaultValue={friendInfo.name}
        onChange={handleFriendInfo}
      >
        👫 Friend Name
      </Input>
      <Input
        type="text"
        connect="friendImage"
        defaultValue={friendInfo.image}
        disabled={true}
      >
        {" "}
        🌄 Image URL
      </Input>
      <Button>Add</Button>
    </form>
  );
}
