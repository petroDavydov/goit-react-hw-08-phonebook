import ContactForm from "../../components/ContactForm/ContactForm";
import Filter from "../../components/Filter/Filter";
import ContactList from "../../components/ContactsList/ContactList";
import s from "./ContactPage.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/phonebook/phone-operations";

const ContactPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.contacts}>
      <h2 className={s.titleContactPage}>PHONEBOOK</h2>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactPage;
