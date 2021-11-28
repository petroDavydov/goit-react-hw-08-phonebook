import { Link, NavLink } from "react-router-dom";
import s from "./HeaderNavigation.module.css";

const HeaderNavigation = () => {
  return (
    <header className={s.header}>
      <nav className={s.navigation}>
        <ul className={s.list}>
          <li className={s.item}>
            <NavLink to="/" className={`${s.link} ${s.active}`}>
              Home
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/contacts" className={`${s.link} ${s.active}`}>
              Contacts
            </NavLink>
          </li>
          <li className={s.item}>
            <Link to="/login" className={`${s.link} ${s.active}`}>
              Login
            </Link>
          </li>
          <li className={s.item}>
            <Link to="/register" className={`${s.link} ${s.active}`}>
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNavigation;
