import Head from "next/head";
import dynamic from "next/dynamic";

import _map from "lodash/map";
import _get from "lodash/get";

import CardComponent, { CardSkeleton } from "../components/Card";
import Layout from "../components/MainLayout";
import InfiniteScroll from "../components/InfiniteScroll";

import { axiosInstance } from "../config";

import { useImageToggleHook } from "../hooks";

import styles from "../public/pageStlyes/home.css";

const LightBox = dynamic(() => import("fslightbox-react"), { ssr: false });

const Home = ({ photos }) => {
  const [photosArr, setPhotos] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [hasMore, setHasMore] = React.useState(true);

  const { imgIndex, toggleLightBox, isVisible } = useImageToggleHook();

  const photoSourceUrls = _map(photosArr, photo =>
    _get(photo, "urls.small", "")
  );

  const fetchData = async () => {
    if (photosArr.length === 30) {
      return setHasMore(false);
    } else {
      const response = await axiosInstance.get("/photos", {
        params: { page: page, per_page: 10 }
      });

      setPhotos([...photosArr, ...response.data]);
      setPage(page + 1);
    }
  };

  React.useEffect(() => {
    setPhotos([...photosArr, ...photos]);
    setPage(page + 1);
  }, []);

  return (
    <Layout>
      <Head>
        <title>SplashPhotography.</title>
        <meta property="og:url" content={`${process.env.DOMAIN}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Splash Photos." />
        <meta
          property="og:description"
          content="High quality images from the famous API Unsplash. View images, users and other information about them."
        />
        <meta
          property="og:image"
          content={`${process.env.DOMAIN}/ApplicationSnapShot.png`}
        />
        <meta property="og:url" content={`${process.env.DOMAIN}`} />
        <meta
          property="og:site_name"
          content={`${process.env.APPLICATION_NAME}`}
        />
        <meta property="fb:app_id" content={`${process.env.FACEBOOK_APP_ID}`} />
        <meta
          name="description"
          content="High quality images from the famous API Unsplash. View images, users and other information about them."
        />
        <link rel="canonical" href={`${process.env.DOMAIN}`} />
      </Head>
      <>
        <LightBox
          slide={imgIndex}
          toggler={isVisible}
          sources={photoSourceUrls}
          key={photoSourceUrls}
        />
      </>
      <InfiniteScroll
        dataLength={photosArr.length}
        next={fetchData}
        hasMore={hasMore}
        scrollThreshold={1}
        loadingSkeleton={<CardSkeleton />}
      >
        <div className={`p-2 card-columns ${styles.cardsColumnsContainer}`}>
          {photosArr &&
            photosArr.map((photo, i) => (
              <CardComponent
                photo={photo}
                toggleLightBox={() => toggleLightBox(i)}
                key={i}
              />
            ))}
        </div>
      </InfiniteScroll>
    </Layout>
  );
};

Home.getInitialProps = async () => {
  const response = await axiosInstance.get("/photos", {
    params: { per_page: 10 }
  });

  return {
    photos: response.data
  };
};

export default Home;
