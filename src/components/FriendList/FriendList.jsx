import { FriendListItem } from "../FriendsListItem/FriendListItem";
import css from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};
