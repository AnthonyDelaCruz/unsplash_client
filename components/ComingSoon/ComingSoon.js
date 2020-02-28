import Link from "next/link";

/**
 * @TODO
 * Fix alignment if coming soon text
 */
export default function ComingSoon({ type }) {
  return (
    <div className="h-100 d-flex flex-column justify-content-center align-items-center">
      <h1>This {type} will come soon!</h1>
      <p>
        In the meantime, why dont you go and check out some awesome photos{" "}
        <Link href="/">
          <a>here.</a>
        </Link>
      </p>
    </div>
  );
}
