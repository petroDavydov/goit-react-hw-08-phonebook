import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { contactsOperations } from "../../redux/Phonebook/index";
import s from "./ContactForm.module.css";
import { getContacts } from "../../redux/Phonebook/phone-selectors";

export default function Form() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(getContacts);

  const handleInputChange = (e) => {
    const { name, value = "" } = e.target;
    name === "name" ? setName(value) : setNumber(value);
  };

  const resetState = () => {
    setName("");
    setNumber("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const comparableElement = contacts.some(
      (element) => element.name.toLowerCase() === name.toLowerCase()
    );
    if (comparableElement) {
      resetState();
      return alert(`${name} is already in the directory`);
    }
    dispatch(contactsOperations.addContact({ name, number }));
    resetState();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.contactFormLabel}>
        Name
        <input
          onChange={handleInputChange}
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
          onChange={handleInputChange}
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
