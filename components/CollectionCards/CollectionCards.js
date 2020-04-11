import Link from "next/link";
import Tags from "../../components/Tags";
import UserLink from "../../components/UserLink";
import styles from "./CollectionCards.css";

export default function CollectionCards({ collection }) {
  return (
    <div className="col-md-4 col-sm-12">
      <Link href="/collections/[id]" as={`/collections/${collection.id}`}>
        <div>
          <div
            style={{
              background:
                collection.cover_photo &&
                `url(${collection.cover_photo.urls.regular}) center center`,
            }}
            className={`${styles.imageBackground} d-flex justify-content-center align-items-center my-2 my-md-0 px-3`}
          >
            <h4 className="text-align-left font-weight-bold">
              {collection.title}
            </h4>
          </div>
        </div>
      </Link>
      <div className="text-left py-2">
        <p>
          <UserLink
            name={collection.user.name}
            username={collection.user.username}
          />
        </p>
        {collection.tags.map((tag) => (
          <Tags title={tag.title} />
        ))}
      </div>
    </div>
  );
}
