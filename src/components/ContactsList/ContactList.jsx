import Contacts from "../Contact";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilteredContacts } from "../../redux/phonebook/phone-selectors";
import {
  fetchContacts,
  deleteContact,
} from "../../redux/phonebook/phone-operations";
import s from "./ContactList.module.css";

export default function ContactsList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li className={s.item} key={id}>
          <Contacts name={name} number={number} />
          <button
            className={s.button}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
