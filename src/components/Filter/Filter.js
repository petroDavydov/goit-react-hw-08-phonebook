import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/contacts/contactsActions";
import { getFilter } from "../../redux/contacts/contactsSelectors";
import s from "./Filter.module.css";

export function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onInputChange = (e) => dispatch(actions.changeFilter(e.target.value));

  return (
    <div className={`${s.grid} ${s.align__item}`}>
      <div className={s.register}>
        <div className={s.form__field}>
          <p>Find contacts by name</p>
          <input
            className={s.input}
            type="text"
            name="filter"
            value={filter}
            onChange={onInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </div>
      </div>
    </div>
  );
}
