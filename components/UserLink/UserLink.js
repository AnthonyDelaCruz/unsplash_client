import Link from "next/link";

export default function UserLink({ name, username, customClassName }) {
  return (
    <Link href="/user/[username]" as={`/user/${username}`}>
      <a className={`username ${customClassName}`}>{name}</a>
    </Link>
  );
}
