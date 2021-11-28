import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
          >
            Login
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            to="/register"
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
          >
            Register
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default AuthNav;
