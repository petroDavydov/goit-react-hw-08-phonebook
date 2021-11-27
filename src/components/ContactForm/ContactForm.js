import s from "./ContactsForm.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/contactsOperations";
import { getItems } from "../../redux/contacts/contactsSelectors";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChangeName = (e) => {
    setNumber(e.target.value);
  };

  const handleChangeNumber = (e) => {
    setNumber(e.target.value);
  };

  const contacts = useSelector(getItems);

  const dispatch = useDispatch();
  const onSubmit = (name, number) => dispatch(addContact({ name, number }));

  const repeatName = (newName) => {
    return contacts.find((contact) => contact.name === newName);
  };

  const repeatNumber = (newNumber) => {
    return contacts.find((contact) => contact.number === newNumber);
  };

  const notification = () => {
    toast.info(`Name: ${name} or Number:${number} is already in conact`, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const formSubmitHandler = (name, number) => {
    if (!repeatName(name) && !repeatNumber(number)) {
      onSubmit(name, number);
    } else {
      notification();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    formSubmitHandler(name, number);
    setName("");
    setNumber("");
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.contactFormLabel}>
        Name
        <input
          onChange={handleChangeName}
          value={name}
          className={s.inputContactForm}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={s.contactFormLabel}>
        Phone
        <input
          value={number}
          className={s.inputContactForm}
          onChange={handleChangeNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button className={s.btnContactForm} type="submit">
        <span className={s.btnText}> Add contacts</span>
      </button>
    </form>
  );
}
