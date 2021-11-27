import s from "./Container.module.css";
import PropTypes from "prop-types";

export function Container({ children }) {
  return <div className={s.container}>{children}</div>;
}

Container.prototype = {
  children: PropTypes.node,
};
