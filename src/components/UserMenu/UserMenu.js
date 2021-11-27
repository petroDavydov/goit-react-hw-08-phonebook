import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/authOperations";
import styles from "./UserMenu.module.css";

export const UserNavigation = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.userMenuWrapper}>
      <button
        type="button"
        onClick={() => dispatch(logout())}
        className={styles.btnLogOut}
      >
        Logout
      </button>
    </div>
  );
};
