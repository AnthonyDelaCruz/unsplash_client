import Head from "next/head";
import dynamic from "next/dynamic";

import _map from "lodash/map";
import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";

import CardComponent from "components/Card";
import Layout from "components/MainLayout";
import InfiniteScroll from "components/IfiniteScroll";

import { axiosInstance } from "config";
import { useImageToggleHook } from "hooks";
import MetaTags from "components/MetaTags";

const LightBox = dynamic(() => import("fslightbox-react"), { ssr: false });

const Home = () => {
  const [photosArr, setPhotos] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [error, setError] = React.useState("");
  const [hasMore, setHasMore] = React.useState(true);

  const { imgIndex, toggleLightBox, isVisible } = useImageToggleHook();

  const photoSourceUrls = _map(photosArr, (photo) =>
    _get(photo, "urls.small", "")
  );

  const fetchData = async () => {
    if (photosArr.length >= 30) {
      return setHasMore(false);
    } else {
      try {
        const response = await axiosInstance.get("/photos", {
          params: { page: page + 1, per_page: 10 },
        });
        setPhotos([...photosArr, ...response.data]);
        setPage(page + 1);
      } catch (error) {
        console.log("error", error.message);
        setError(error.message);
      }
    }
  };

  React.useEffect(() => {
    (async () => {
      try {
        axiosInstance
          .get("/photos", {
            params: { per_page: 10 },
          })
          .then((response) => {
            setPhotos([...photosArr, ...response.data]);
            setPage(page + 1);
          });
      } catch (error) {
        setError(error.message);
      }
    })();
  }, []);

  return (
    <Layout withOutFooter>
      <MetaTags />
      <LightBox
        slide={imgIndex}
        toggler={isVisible}
        sources={photoSourceUrls}
        key={photoSourceUrls}
      />
      {error ? (
        <div className="full-height--with-footer m-auto d-flex flex-column justify-content-center align-items-center">
          <h3 className="font-weight-bold text-center">{error}</h3>
          <button
            className="btn btn-outline-info mt-4"
            onClick={() => location.reload()}
          >
            Reload the page
          </button>
        </div>
      ) : (
        <InfiniteScroll
          dataLength={photosArr.length}
          next={fetchData}
          hasMore={hasMore}
        >
          <div className="card-columns p-2 cardsColumnsContainer">
            {photosArr.map((photo, i) => (
              <CardComponent
                photo={photo}
                toggleLightBox={() => toggleLightBox(i)}
                key={i}
              />
            ))}
          </div>
        </InfiniteScroll>
      )}
    </Layout>
  );
};

export default Home;
