import { useRouter } from "next/router";

import dynamic from "next/dynamic";
import Link from "next/link";
import Head from "next/head";

import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";
import _map from "lodash/map";
import { IoIosArrowRoundBack } from "react-icons/io";

import CardComponent, { CardSkeleton } from "../../components/Card";
import Layout from "../../components/MainLayout";
import MotionDiv from "../../components/MotionDiv";

import { axiosInstance } from "../../config";
import { useImageToggleHook } from "../../hooks";
import { fadeInFromBottom } from "../../utils/animations";

const LightBox = dynamic(() => import("fslightbox-react"), { ssr: false });
import styles from "../../public/pageStlyes/userCollection.css";

export default function CollectionContainer({ id }) {
  const [collectionData, setCollectionData] = React.useState({});
  const { imgIndex, toggleLightBox, isVisible } = useImageToggleHook();
  const router = useRouter();

  React.useEffect(() => {
    if (id) {
      axiosInstance.get(`/collections/${id}`).then(data => {
        setCollectionData(data.data);
      });
    }
  }, [router]);

  const title = _get(collectionData, "title", "");
  const previewPhotos = _get(collectionData, "preview_photos", []);
  const userObj = _get(collectionData, "user", {});
  const photoSourceUrls = _map(previewPhotos, photo =>
    _get(photo, "urls.small", "")
  );

  return (
    <Layout withOutSidebar>
      <Head>
        <title>Collections.</title>
        <meta
          name="description"
          content="Collection of photos made by users!"
        />
        <meta
          type="og:url"
          content={`${process.env.DOMAIN}/collections/${id}`}
        />
        <meta type="og:title" content="Collections" />
        <meta
          type="og:description"
          content="Collection of photos made by users!"
        />
        <link
          rel="canonical"
          href={`${process.env.DOMAIN}/collections/${id}`}
        />
      </Head>
      <div className="px-2 px-md-5 py-3">
        <Link href="/">
          <a className={`${styles.backToHome}`}>
            <IoIosArrowRoundBack size="1.875rem" />
            Back to Home
          </a>
        </Link>
      </div>
      <>
        <LightBox
          slide={imgIndex}
          toggler={isVisible}
          sources={photoSourceUrls}
          key={photoSourceUrls}
        />
      </>
      <h1 className="text-center font-weight-bold mb-5">Collections.</h1>
      <div className="mb-4">
        {!_isEmpty(collectionData) ? (
          <>
            <div className="text-center">
              <h4>
                Collection title: <strong>{title}</strong>
              </h4>
            </div>
            <div className="text-center">
              By:{" "}
              <strong>
                <Link href={`/user/${userObj.name}`}>
                  <a>{userObj.name}</a>
                </Link>
              </strong>
            </div>
          </>
        ) : (
          <div className="text-center">Loading collection info...</div>
        )}
      </div>
      {!_isEmpty(previewPhotos) ? (
        <MotionDiv variants={fadeInFromBottom}>
          <div
            className={`${styles.cardsColumnsContainer} container card-columns mb-5`}
          >
            {previewPhotos.map((photo, i) => {
              const photoWithUserObj = {
                ...photo,
                user: {
                  ...userObj
                }
              };
              return (
                <CardComponent
                  toggleLightBox={() => toggleLightBox(i)}
                  key={i}
                  photo={photoWithUserObj}
                />
              );
            })}
          </div>
        </MotionDiv>
      ) : (
        <div className="container card-columns my-5">
          {_map([1, 2, 3], () => (
            <CardSkeleton />
          ))}
        </div>
      )}
    </Layout>
  );
}

CollectionContainer.getInitialProps = async ({ query }) => {
  return {
    id: query.id
  };
};
