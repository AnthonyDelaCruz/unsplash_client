// import Link from "next/link";

/**
 * @TODO
 * Incororate next link tag
 */
export default function CollectionCards({ collection }) {
  return (
    <div className="col-md-4 col-sm-12">
      <div className="imageBackground d-flex justify-content-center align-items-center my-2 my-md-0 px-3">
        <h4
          style={{ color: "#ffffff" }}
          className="text-align-left font-weight-bold"
        >
          {collection.title}
        </h4>
      </div>
      <style jsx>{`
        .imageBackground {
          background: url(${collection.cover_photo.urls.regular}) center center;
          height: 15.625rem;
          box-shadow: inset 0 0 0 100vw rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
}
