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
import CollectionCards from "../../components/CollectionCards";
import { axiosInstance } from "../../config";

/**
 * @TODO
 * SEO tags
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
  const tags = _get(photoDetails, "tags", []);
  const relatedCollections = _get(
    photoDetails,
    "related_collections.results",
    []
  );
  return (
    <Layout withOutSidebar>
      <div>
        <div className="px-2 px-md-5 py-3">
          <Link href="/">
            <a className="backToHome">
              <IoIosArrowRoundBack size="1.875rem" /> Back to Home
            </a>
          </Link>
        </div>
        <div className="photo d-flex flex-column-reverse flex-md-row justify-content-md-center pt-md-5 pb-md-5 pt-sm-0">
          <div className="info-section-container mt-4 mt-md-0 px-3 px-md-5">
            <div className="d-flex align-items-center info-section">
              <Img
                className="h-auto img img-fluid"
                src={userAvatarUrl}
                alt={userName}
              />
              <h3 className="mx-3 mb-0">{userName}</h3>
            </div>
            <div className="my-4 my-md-3 d-flex justify-content-between">
              <div className="mx-1 d-flex align-items-center flex-column flex-md-row">
                <div className="d-flex">
                  <IoIosEye size="22px" className="mr-1 mr-md-2" />
                  <span className="mr-2">Views</span>
                </div>
                {viewCount}
              </div>
              <div className="mx-1 d-flex align-items-center flex-column flex-md-row">
                <div>
                  <IoIosHeart size="20px" className="mr-1 mr-md-2" />
                  <span className="mr-2">Likes</span>
                </div>
                {likeCount}
              </div>
              <div className="mx-1 d-flex align-items-center flex-column flex-md-row">
                <div>
                  <IoIosCloudDownload size="20px" className="mr-1 mr-md-2" />
                  <span className="mr-2">Downloads</span>
                </div>
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
          <div className="mb-4 mb-md-0 text-center">
            <Img
              className="feature-photo h-auto img img-fluid"
              src={photoImgUrl}
              alt={photoAltDescription}
            />
          </div>
        </div>
        <div className="related-section text-center my-5">
          <h3>
            Related <span className="font-weight-bold">Collections.</span>
          </h3>
          <div className="container">
            <div className="my-5 row">
              {!_isEmpty(relatedCollections) &&
                relatedCollections.map((collection, i) => (
                  <CollectionCards collection={collection} key={i} />
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
          // padding: 0 2rem;
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
        .backToHome {
          color: black;
          font-size: 1rem;
          text-decoration: none;
        }
        @media only screen and (max-width: 768px) {
          .image-section-container img {
            border
          }
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
