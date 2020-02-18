import { IconContext } from "react-icons";
import { FaCameraRetro } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { useRouter } from "next/router";
import CustomLink from "./Link";

export default function Sidebar({ customClassName }) {
  const router = useRouter();
  const links = [
    { text: "Home", href: "/" },
    { text: "Gallery", href: "/gallery" },
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" }
  ];

  return (
    <div className={`sidebar ${customClassName}`}>
      <IconContext.Provider value={{ className: "global-class-name" }}>
        <div className="header-container d-flex flex-column align-items-center">
          <FaCameraRetro size="100px" />
          <p className="font-weight-bold my-3">from Unsplash API</p>
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
        <p className="follow text-center">Follow me here!</p>
        <div className="d-flex  mx-md-5 justify-content-around">
          <a href="https://www.facebook.com/tonydc23" target="_blank">
            <FaFacebook size="30px" />
          </a>
          <a href="https://github.com/AnthonyDelaCruz" target="_blank">
            <FaGithub size="30px" />
          </a>
          <a
            href="https://www.linkedin.com/in/anthony-delacruz-956a97167/"
            target="_blank"
          >
            <FaLinkedin size="30px" />
          </a>
        </div>
      </div>
      <style jsx>{`
        .sidebar {
          height: calc(100vh - 60px);
          position: sticky;
          top: 60px;
          background: #dd5e89; 
          background: -webkit-linear-gradient(to bottom, #f7bb97, #dd5e89);
          background: linear-gradient(to bottom, #f7bb97, #dd5e89);
        }
        .header-container {
        }
        .follow {
          font-size: 1.2rem;
          font-weight: bold;
        }
        a {
          color: black;
        }
      `}</style>
    </div>
  );
}
