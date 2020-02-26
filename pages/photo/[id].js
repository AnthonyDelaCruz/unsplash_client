import Img from "react-cool-img";
import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";
import Link from "next/link";
import {
  IoIosArrowRoundBack,
  IoIosEye,
  IoIosHeart,
  IoIosCloudDownload
} from "react-icons/io";
import Moment from "react-moment";

import Layout from "../../components/Layout";
import { axiosInstance } from "../../config";

/**
 * @TODO
 * Make related content component
 * Mobile responsiveness
 */

export default function Photo({ id, photoDetails }) {
  const photoImgUrl = _get(photoDetails, "urls.small", "");
  const photoAltDescription = _get(
    photoDetails,
    "alt_description",
    "Unsplash Photo"
  );
  const photoDescription = _get(photoDetails, "description");
  const userName = _get(photoDetails, "user.name", "");
  const userAvatarUrl = _get(photoDetails, "user.profile_image.medium", "");
  const viewCount = _get(photoDetails, "views", 0);
  const likeCount = _get(photoDetails, "likes", 0);
  const downloadCount = _get(photoDetails, "downloads", 0);
  const updatedAtDate = _get(photoDetails, "updated_at", "");
  const width = _get(photoDetails, "width");
  const height = _get(photoDetails, "height");
  const tags = _get(photoDetails, "tags", []);
  const relatedCollections = _get(
    photoDetails,
    "related_collections.results",
    []
  );
  return (
    <Layout withOutSidebar>
      <div>
        <div className="px-5 py-3">
          <Link href="/">
            <a>
              <IoIosArrowRoundBack /> Back to Home
            </a>
          </Link>
        </div>
        <div className="photo d-flex flex-column-reverse flex-md-row justify-content-md-center pt-md-5 pb-md-5 pt-sm-0">
          <div className="info-section-container">
            <div className="d-flex align-items-center info-section">
              <Img
                className="h-auto img img-fluid"
                src={userAvatarUrl}
                alt={userName}
              />
              <h3 className="mx-3 mb-0">{userName}</h3>
            </div>
            <div className="mx-3 mt-3 d-flex">
              <div className="mx-3">
                <IoIosEye /> <span className="mr-2">Views</span>
                {viewCount}
              </div>
              <div className="mx-3">
                <IoIosHeart /> <span className="mr-2">Likes</span>
                {likeCount}
              </div>
              <div className="mx-3">
                <IoIosCloudDownload /> <span className="mr-2">Downloads</span>
                {downloadCount}
              </div>
            </div>
            <div className="info-section mt-3">
              <div>
                <p>
                  Created:{" "}
                  <span className="text-muted">
                    <Moment format="YYYY/MM/DD">{updatedAtDate}</Moment>
                  </span>
                </p>
              </div>
              {photoDescription && (
                <div>
                  <p>
                    About the photo:{" "}
                    <span className="text-muted">{photoDescription}</span>
                  </p>
                </div>
              )}
              <div className="d-flex">
                <p className="mr-3">
                  Width: <span className="text-muted">{width}</span>
                </p>
                <p>
                  Height: <span className="text-muted">{height}</span>
                </p>
              </div>
              <div>
                <p>Tags</p>
                <div>
                  {tags.map(tag => (
                    <Link href="/">
                      <a className="tags btn btn-outline-danger mr-2 mb-2 text-muted">
                        {tag.title}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="image-section-container mb-4 mb-md-0">
            <Img
              style={{ borderRadius: "8px" }}
              className="h-auto img img-fluid"
              src={photoImgUrl}
              alt={photoAltDescription}
            />
          </div>
        </div>
        <div className="related-section text-center">
          <h3>
            Related <span className="font-weight-bold">Collections.</span>
          </h3>
          <div className="container">
            <div className="my-5 row">
              {!_isEmpty(relatedCollections) &&
                relatedCollections.map((collection, i) => (
                  <div key={i} className="col-md-4 col-sm-12">
                    <div
                      style={{
                        height: "15.625rem",
                        background: `url(${collection.cover_photo.urls.regular}) center center`,
                        boxShadow: "inset 0 0 0 100vw rgba(0,0,0,0.5)"
                      }}
                    >
                      <h4
                        style={{ color: "#ffffff" }}
                        className="text-align-left font-weight-bold"
                      >
                        {collection.title}
                      </h4>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .info-section-container {
          max-width: 37.5rem;
        }
        .info-section {
          padding: 0 2rem;
        }
        .tags {
          border-color: #cdcdcd;
        }
        .tags:hover {
          color: #black !important;
          background: transparent;
        }
        p {
          font-size: 1.25rem;
        }
        .related-section {
          margin-top: 5rem;
        }
      `}</style>
    </Layout>
  );
}

Photo.getInitialProps = async ({ query }) => {
  const response = await axiosInstance.get(`/photos/${query.id}`);

  return {
    id: query.id,
    photoDetails: response.data
  };
};
