import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "../../redux/auth/authSelectors";
import defaultAvatar from "../../images/avatar.png";
import { fetchLogout } from "../../redux/auth/authOperations";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const avatar = defaultAvatar;

  return (
    <div className={s.logout}>
      <img src={avatar} alt="avatar" width="32" className={s.img} />
      <span className={s.text}>Welcome {name ? name : "user"}</span>
      <button
        type="button"
        className={s.btn}
        onClick={() =>
          dispatch(fetchLogout(toast.success(`You are signed out`)))
        }
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
