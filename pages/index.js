import Head from "next/head";
import dynamic from "next/dynamic";

import _map from "lodash/map";
import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";

import CardComponent, { CardSkeleton } from "components/Card";
import Layout from "components/MainLayout";
import InfiniteScroll from "components/InfiniteScroll";

import { axiosInstance } from "config";
import { useImageToggleHook } from "hooks";

const LightBox = dynamic(() => import("fslightbox-react"), { ssr: false });

const Home = () => {
  const [photosArr, setPhotos] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [hasMore, setHasMore] = React.useState(true);

  const { imgIndex, toggleLightBox, isVisible } = useImageToggleHook();

  const photoSourceUrls = _map(photosArr, (photo) =>
    _get(photo, "urls.small", "")
  );

  const fetchData = async () => {
    if (photosArr.length === 30) {
      return setHasMore(false);
    } else {
      const response = await axiosInstance.get("/photos", {
        params: { page: page, per_page: 10 },
      });

      setPhotos([...photosArr, ...response.data]);
      setPage(page + 1);
    }
  };

  React.useEffect(() => {
    axiosInstance
      .get("/photos", {
        params: { per_page: 10 },
      })
      .then((response) => {
        setPhotos([...photosArr, ...response.data]);
        setPage(page + 1);
      });
  }, []);

  return (
    <Layout>
      <Head>
        <title>SplashPhotography.</title>
        <meta property="og:url" content={`${process.env.DOMAIN}`} />
        <meta property="og:title" content="Splash Photos." />
        <meta
          property="og:description"
          content="High quality images from the famous API Unsplash. View images, users and other information about them."
        />
        <meta
          name="description"
          content="High quality images from the famous API Unsplash. View images, users and other information about them."
        />
        <link rel="canonical" href={`${process.env.DOMAIN}`} />
      </Head>
      {/* <>
        <LightBox
          slide={imgIndex}
          toggler={isVisible}
          sources={photoSourceUrls}
          key={photoSourceUrls}
        />
      </> */}
      {/* <InfiniteScroll
        dataLength={photosArr.length}
        next={fetchData}
        hasMore={hasMore}
        scrollThreshold={1}
      >
        <div
          className={`p-2 card-columns h-100 ${styles.cardsColumnsContainer}`}
        >
          {_isEmpty(photosArr) &&
            [1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => <CardSkeleton />)}
          {photosArr.map((photo, i) => (
            <div>
              <CardComponent
                photo={photo}
                toggleLightBox={() => toggleLightBox(i)}
                key={i}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll> */}
    </Layout>
  );
};

export default Home;
