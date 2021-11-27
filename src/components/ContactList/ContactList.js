import { useSelector, useDispatch } from "react-redux";
import s from "./ContactList.module.css";
import { getVisibleContacts } from "../../redux/contacts/contactsOperations";
import { deleteContact } from "../../redux/contacts/contactsOperations";

export function ContactList() {
  const contacts = useSelector(getVisibleContacts);

  const dispatch = useDispatch();
  const onDeleteContact = (id) => dispatch(deleteContact(id));

  return (
    <ul className={s.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.contactsItem}>
          <>
            <p>{name}</p> : <p>{number}</p>
          </>
          <button
            className={s.buttonContact}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
