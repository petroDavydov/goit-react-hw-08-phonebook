import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.content}>
      <h2 className={s.titleHomePage}>PHONEBOOK</h2>
      <p className={s.text}>Before starting work please log in or sign up.</p>
    </div>
  );
};

export default HomePage;
