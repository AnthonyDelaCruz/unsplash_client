import Link from "next/link";

export default function CustomLink({ link, active }) {
  return (
    <div className="link-container">
      <Link href={link.href}>
        <a className={`link-item pb-2 ${active && "active"}`}>{link.text}</a>
      </Link>
      <style jsx>{`
        .link-container {
          margin: 10px 0;
        }
        .link-item {
          color: black;
          font-size: 1.2rem;
          font-weight: bold;
        }

        .link-item:hover {
          text-decoration: none;
        }
        .active {
          border-bottom: 2px solid black;
        }
      `}</style>
    </div>
  );
}
