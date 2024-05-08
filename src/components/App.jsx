import "./App.css";

import userData from "../userData.json";
import { Profile } from "./Profile/Profile";

import friends from "../friends.json";
import { FriendList } from "./FriendList/FriendList";

function App() {
  return (
    <>
      <Profile userData={userData} />
      <FriendList friends={friends} />
    </>
  );
}

export default App;
