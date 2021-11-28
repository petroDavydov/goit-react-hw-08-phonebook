import { useSelector, useDispatch } from "react-redux";
import {
  contactsSelectors,
  contactsActions,
} from "./../../redux/Phonebook/index";
import PropTypes from "prop-types";
import s from "./Filter.module.css";

export default function Filter() {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  const onChangeInput = (e) => {
    dispatch(contactsActions.changeFilter(e.target.value));
  };
  return (
    <label className={s.textFilter}>
      Find contacts by name
      <input
        className={s.inputFilter}
        type="text"
        value={value}
        onChange={onChangeInput}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
