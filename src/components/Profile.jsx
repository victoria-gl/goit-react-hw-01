const userData = {
  username: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const Profile = (userData) => {
  return (
    <div>
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
        />
        <p>Petra Marica</p>
        <p>@pmarica</p>
        <p>Salvador, Brasil</p>
      </div>

      <ul>
        <li>
          <span>Followers</span> <span>1000</span>
        </li>
        <li>
          <span>Views</span> <span>2000</span>
        </li>
        <li>
          <span>Likes</span> <span>3000</span>
        </li>
      </ul>
    </div>
  );
};

function App() {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </div>
  );
}

export default App;
