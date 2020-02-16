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
          <h3 className="font-weight-bold my-3">Splash photos</h3>
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
          background-color: #f2666b;
        }
        .header-container {
          margin: 50px 0;
        }
      `}</style>
    </div>
  );
}
