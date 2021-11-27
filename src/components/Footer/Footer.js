import s from "./Footer.module.css";
import { FaReact } from "react-icons/fa";

export const Footer = () => (
  <footer className={s.footer}>
    <div className={s.description}>
      <FaReact className={s.FaReact} />
      <a
        href="https://github.com/petroDavydov"
        className={s.link}
        rel="noopener noreferrer nofollow"
        target="_blank"
      >
        Petro Davydov || 🎁
      </a>
    </div>
  </footer>
);
export default Footer;
