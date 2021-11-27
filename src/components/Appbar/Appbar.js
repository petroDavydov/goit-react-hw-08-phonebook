import { NavLink } from "react-router-dom";
import { AuthNave } from "../AuthNav/AuthNav";
import s from "./Appbar.module.css";
import { useSelector } from "react-redux";
import { isAuthorized } from "../../redux/auth/authSelectors";
import UserMenu from "../UserMenu/UserMenu";

export function Appbar() {
  const isAuthenticate = useSelector(isAuthorized);
  return (
    <>
      <header className={s.header}>
        <NavLink
          to="/"
          exact
          className={s.navLink}
          activeClassName={s.navActiveLink}
        >
          Home
        </NavLink>

        {isAuthenticate && (
          <NavLink
            to="/contacts"
            className={s.navLink}
            activeClassName={s.navActiveLink}
          >
            Contacts
          </NavLink>
        )}
        {isAuthenticate ? <UserMenu /> : <AuthNave />}
      </header>
    </>
  );
}
