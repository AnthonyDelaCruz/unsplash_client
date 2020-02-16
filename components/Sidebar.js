import { IconContext } from "react-icons";
import { FaCameraRetro } from "react-icons/fa";
import { useRouter } from "next/router";
import CustomLink from "./Link";

export default function Sidebar({ customClassName }) {
  const router = useRouter();
  const links = [
    { text: "Home", href: "/" },
    { text: "Gallery", href: "/gallery" },
    { text: "About", href: "/about" }
  ];

  return (
    <div className={`sidebar px-5 ${customClassName}`}>
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
      <style jsx>{`
        .sidebar {
          height: calc(100vh - 60px);
          position: sticky;
          top: 60px;
          background: #dd5e89; /* fallback for old browsers */
          background: -webkit-linear-gradient(
            to bottom,
            #f7bb97,
            #dd5e89
          ); /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(
            to bottom,
            #f7bb97,
            #dd5e89
          ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }
        .header-container {
          margin: 50px 0;
        }
      `}</style>
    </div>
  );
}
