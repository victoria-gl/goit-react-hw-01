import css from "./Profile.module.css";

export const Profile = ({
  userData: {
    username,
    avatar,
    location,
    tag,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <div className={css.wrapper}>
      <div className={css.generalInfo}>
        <img
          className={css.img}
          src={avatar}
          alt={username}
          width="120"
          height="120"
        />
        <p className={css.title}>Petra Marica</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span>{followers}</span>
          <span>1000</span>
        </li>

        <li className={css.item}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
