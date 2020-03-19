import Link from "next/link";

export default function ComingSoon({ type }) {
  return (
    <div className="h-100 d-flex flex-column justify-content-center align-items-center p-4">
      <h1 className="font-weight-bold">This {type} will come soon!</h1>
      <p>
        In the meantime, why dont you go and check out some awesome photos in
        the{" "}
        <Link href="/">
          <a>Home Page</a>
        </Link>
      </p>
    </div>
  );
}
