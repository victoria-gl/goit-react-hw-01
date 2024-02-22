import userData from "../userData.json";
import { Profile } from "./Profile/Profile";

export const App = () => {
  return (
    <>
      <Profile userData={userData} />
    </>
  );
};
