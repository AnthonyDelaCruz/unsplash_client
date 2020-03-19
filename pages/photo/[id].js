import Img from "react-cool-img";
import Link from "next/link";
import Moment from "react-moment";

import Head from "next/head";
import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";
import {
  IoIosArrowRoundBack,
  IoIosEye,
  IoIosHeart,
  IoIosCloudDownload
} from "react-icons/io";

import Layout from "../../components/MainLayout";
import CollectionCards from "../../components/CollectionCards";
import Tags from "../../components/Tags";
import MotionDiv from "../../components/MotionDiv";

import { axiosInstance } from "../../config";
import { fadeInFromTop } from "../../utils/animations";

import PhotoPageSkeleton from "../../components/Skeletons/PhotoPageSkeleton";

import styles from "../../public/pageStlyes/photoDetails.css";

export default function Photo({ id }) {
  const [photoDetails, setPhotoDetails] = React.useState({});

  React.useEffect(() => {
    axiosInstance.get(`/photos/${id}`).then(response => {
      setPhotoDetails(response.data);
    });
  }, []);

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

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Layout withOutSidebar>
      <Head>
        <title>{process.env.APPLICATION_NAME} | Image</title>
        <meta name="description" content="Photos of the highest quality." />
        <meta
          property="og:title"
          content={`${process.env.APPLICATION_NAME} | Image`}
        />
        <meta
          property="og:description"
          content="Photos of the highest quality."
        />
        <meta property="og:url" content={`${process.env.DOMAIN}/photo/${id}`} />
      </Head>
      <div className="px-2 px-md-5 py-3">
        <Link href="/">
          <a className={`${styles.backToHome}`}>
            <IoIosArrowRoundBack size="1.875rem" />
            Back to Home
          </a>
        </Link>
      </div>
      {!_isEmpty(photoDetails) ? (
        <MotionDiv variants={fadeInFromTop}>
          <div className="photo d-flex flex-column-reverse flex-md-row justify-content-md-center pt-md-5 pb-md-5 pt-sm-0">
            <div
              className={`${styles.infoSectionContainer} mt-4 mt-md-0 px-3 px-md-5`}
            >
              <div className="d-flex align-items-center info-section">
                <Img
                  style={{ background: "black", height: "40px", width: "40px" }}
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
                  {!_isEmpty(tags) && (
                    <>
                      <p>Tags</p>
                      <div>
                        {tags.map(tag => (
                          <Tags title={tag.title} />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="mb-4 mb-md-0 text-center">
              <Img
                style={{ background: "black", height: "400px", width: "400px" }}
                className="feature-photo h-auto img img-fluid"
                src={photoImgUrl}
                alt={photoAltDescription}
              />
            </div>
          </div>
        </MotionDiv>
      ) : (
        <PhotoPageSkeleton />
      )}
      <div className={`${styles.relatedSection} text-center my-5`}>
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
    </Layout>
  );
}

Photo.getInitialProps = async ({ query }) => {
  return {
    id: query.id
  };
};
