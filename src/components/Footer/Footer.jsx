import s from "./Footer.module.css";
import { FaReact } from "react-icons/fa";

const Footer = () => (
  <footer className={s.footer}>
    <div className={s.description}>
      <FaReact className={s.FaReact} />
      Site in the process of developing the appearance //
      <a
        href="https://github.com/petroDavydov"
        className={s.footerLink}
        rel="noopener noreferrer nofollow"
        target="_blank"
      >
        Petro Davydov
      </a>
    </div>
  </footer>
);
export default Footer;
