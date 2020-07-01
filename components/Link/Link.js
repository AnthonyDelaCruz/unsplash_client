import Link from "next/link";

export default function CustomLink({
  link,
  active,
  customClassName,
  customActiveClassName,
}) {
  return (
    <div className={`linkContainer ${customClassName}`}>
      <Link href={link.href}>
        <a
          className={`pb-2 font-weight-bold 
            linkItem
            ${!customActiveClassName && active && "active"}
            ${active && customActiveClassName}`}
        >
          {link.text}
        </a>
      </Link>
    </div>
  );
}
