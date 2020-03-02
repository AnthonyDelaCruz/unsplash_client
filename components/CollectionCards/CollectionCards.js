// import Link from "next/link";
import styles from "./CollectionCards.css";

/**
 * @TODO
 * Incororate next link tag
 */
export default function CollectionCards({ collection }) {
  return (
    <div className="col-md-4 col-sm-12">
      <div
        style={{
          background: `url(${collection.cover_photo.urls.regular}) center center`
        }}
        className={`${styles.imageBackground} d-flex justify-content-center align-items-center my-2 my-md-0 px-3`}
      >
        <h4 className="text-align-left font-weight-bold">{collection.title}</h4>
      </div>
    </div>
  );
}
