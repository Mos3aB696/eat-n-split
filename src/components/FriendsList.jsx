import AddFriend from "./AddFrind";
import Friend from "./Friend";
import Button from "./Button";

export default function FriendsList({
  showAddFriend,
  handleClickFn,
  currentFriends,
  addNewFriend,
  onSelection,
  selectedFriend,
}) {
  return (
    <section className="sidebar">
      <ul>
        {currentFriends.map((friend) => {
          return (
            <Friend
              key={friend.id}
              {...friend}
              friend={friend}
              onSelection={() => onSelection(friend)}
              selectedFriend={selectedFriend}
            />
          );
        })}
      </ul>{" "}
      {!showAddFriend && <Button onClick={handleClickFn}> Add Friend </Button>}
      {showAddFriend && (
        <AddFriend onAddFriend={addNewFriend} afterAddFriend={handleClickFn} />
      )}
      {showAddFriend && <Button onClick={handleClickFn}>Close</Button>}
    </section>
  );
}
