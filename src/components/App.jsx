import userData from "../userData.json";
import "./App.css";
import { Profile } from "./Profile/Profile";

function App() {
  return (
    <>
      <Profile userData={userData} />
    </>
  );
}

export default App;
