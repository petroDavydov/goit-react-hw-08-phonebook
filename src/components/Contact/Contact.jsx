import PropTypes from "prop-types";
import s from "./Contact.module.css";
export default function Contact({ name, number }) {
  return (
    <>
      <span className={s.name}>{name}:</span>
      <span className={s.number}>{number}</span>
    </>
  );
}
Contact.propType = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};
