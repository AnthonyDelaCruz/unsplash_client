import _isEmpty from "lodash/isEmpty";

import Layout from "components/MainLayout";
import MotionDiv from "components/MotionDiv";
import CollectionCards from "components/CollectionCards";

import { fadeInFromBottom } from "utils/animations";
import { axiosInstance } from "config";

export default function Gallery() {
  const [collections, setCollections] = React.useState([]);
  React.useEffect(() => {
    axiosInstance.get("/collections").then((response) => {
      setCollections(response.data);
    });
  }, []);
  return (
    <Layout withOutSidebarComingSoon withOutFooter>
      <div className="collectionContainer">
        <h1 className="text-center font-weight-bold my-5">Collections.</h1>
        {!_isEmpty(collections) ? (
          <MotionDiv
            variants={fadeInFromBottom}
            className={`container row m-0`}
          >
            {collections.map((collection, i) => (
              <CollectionCards collection={collection} key={i} />
            ))}
          </MotionDiv>
        ) : (
          <div className="text-center w-100">
            <h3>
              Fetching <strong>Collections</strong>...
            </h3>
          </div>
        )}
      </div>
    </Layout>
  );
}
