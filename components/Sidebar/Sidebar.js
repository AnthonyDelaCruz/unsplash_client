import { IconContext } from "react-icons";
import { FaCameraRetro } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { useRouter } from "next/router";
import CustomLink from "../Link";

import styles from "./Sidebar.css";

export default function Sidebar({ customClassName }) {
  const router = useRouter();
  const links = [
    { text: "Home", href: "/" },
    { text: "Gallery", href: "/gallery" },
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" }
  ];

  return (
    <div className={`${styles.sideBar} ${customClassName}`}>
      <IconContext.Provider value={{ className: "global-class-name" }}>
        <div className="d-flex flex-column align-items-center">
          <FaCameraRetro size="100px" />
          <p className="font-weight-bold my-3">from Unsplash</p>
        </div>
      </IconContext.Provider>
      <div className="d-flex flex-column align-items-center">
        {links.map((link, i) => (
          <CustomLink
            link={link}
            key={i}
            active={link.href === router.pathname}
          />
        ))}
      </div>
      <div>
        <p className={`${styles.follow} font-weight-bold text-center`}>
          Follow me here!
        </p>
        <div className="d-flex  mx-md-5 justify-content-around">
          <a
            rel="noreferrer"
            className={`${styles.socialLinks}`}
            href="https://www.facebook.com/tonydc23"
            target="_blank"
          >
            <FaFacebook size="30px" />
          </a>
          <a
            rel="noreferrer"
            className={`${styles.socialLinks}`}
            href="https://github.com/AnthonyDelaCruz"
            target="_blank"
          >
            <FaGithub size="30px" />
          </a>
          <a
            rel="noreferrer"
            className={`${styles.socialLinks}`}
            href="https://www.linkedin.com/in/anthony-delacruz-956a97167/"
            target="_blank"
          >
            <FaLinkedin size="30px" />
          </a>
        </div>
      </div>
    </div>
  );
}
