import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <ul className="social-media-footer">
        <li className="flex">
          <a
            href="https://github.com/YuriSarmanho"
            target="_blanck"
            className="flex"
          >
            <AiFillGithub className="social-icon-footer" />
            <span>yuriSarmanho</span>
          </a>
        </li>
        <li className="flex">
          <a
            href="https://www.linkedin.com/in/yuri-sarmanho-monteiro-939a52182/"
            target="_blanck"
            className="flex"
          >
            <AiFillLinkedin className="social-icon-footer" />
            <span>yuriSarmanho</span>
          </a>
        </li>
        <li className="flex">
          <BsWhatsapp className="social-icon-footer" />
          <a
            href="https://wa.me/5591991780812"
            target="_blanck"
            className="flex"
          >
            {"(91)99178-0812"}
          </a>
        </li>
        <li className="flex">
          <a
            href="https://www.instagram.com/yuri.sarmanho/"
            target="_blanck"
            className="flex"
          >
            <AiOutlineInstagram className="social-icon-footer" />
            <span>yuri.sarmanho</span>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
