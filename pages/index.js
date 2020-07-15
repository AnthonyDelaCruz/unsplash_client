import Head from "next/head";
import dynamic from "next/dynamic";
import InfiniteScroll from "react-infinite-scroll-component";

import _map from "lodash/map";
import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";

import CardComponent, { CardSkeleton } from "components/Card";
import Layout from "components/MainLayout";
// import InfiniteScroll from "components/InfiniteScroll";

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
      setTimeout(async () => {
        const response = await axiosInstance.get("/photos", {
          params: { page: page + 1, per_page: 10 },
        });

        setPhotos([...photosArr, ...response.data]);
        setPage(page + 1);
      }, 1000);
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
        loader={<h4 className="d-block">Fetching images!</h4>}
        endMessage={<h1 className="d-block">You have seen them all!</h1>}
      >
        <div className="card-columns p-2 cardsColumnsContainer">
          {photosArr.map((photo, i) => (
            // <div>
            //   <h1>SOMETHING</h1>
            //   <h2>SOMETHING</h2>
            // </div>
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

export default Home;
