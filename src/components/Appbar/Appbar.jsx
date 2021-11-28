import s from "./Appbar.module.css";
import UserMenu from "../UserMenu/UserMenu";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import { useSelector } from "react-redux";
import { getIsAuth } from "../../redux/Auth/authSelectors";

const Appbar = () => {
  const isAuth = useSelector(getIsAuth);

  return (
    <header className={s.header}>
      <Navigation />
      {isAuth ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default Appbar;
