import Head from "next/head";

import CardComponent, { CardSkeleton } from "../components/Card";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import InfiniteScroll from "../components/InfiniteScroll";

import { axiosInstance } from "../config";

const Home = ({ photos }) => {
  const [photosArr, setPhotos] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [hasMore, setHasMore] = React.useState(true);

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
        <title>Splash Photos.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-2 card-columns">
        {photosArr && (
          <InfiniteScroll
            dataLength={photosArr.length}
            next={fetchData}
            hasMore={hasMore}
            scrollThreshold={1}
            loadingSkeleton={<CardSkeleton />}
          >
            {photosArr &&
              photosArr.map((photo, i) => (
                <CardComponent customClassName="mb-2" photo={photo} key={i} />
              ))}
          </InfiniteScroll>
        )}
      </div>
      <Footer />
      <style jsx>
        {`
          .card-columns {
            column-gap: 0.5rem;
          }
        `}
      </style>
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
