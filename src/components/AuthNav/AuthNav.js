import { NavLink } from "react-router-dom";
import s from "./AuthNave.module.css";

export function AuthNave() {
  <>
    <NavLink
      to="/register"
      classNaame={s.navLink}
      activeClassName={s.nacActiveLink}
    >
      Register
    </NavLink>

    <NavLink
      to="/login"
      classNaame={s.navLink}
      activeClassName={s.navActiveLink}
    >
      Login
    </NavLink>
  </>;
}
