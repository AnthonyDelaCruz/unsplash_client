import Layout from "../../components/MainLayout";
import { useRouter } from "next/router";
import { axiosInstance } from "../../config";
import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";
import CardComponent from "../../components/Card";

export default function CollectionContainer() {
  const [collectionData, setCollectionData] = React.useState();
  const router = useRouter();

  React.useEffect(() => {
    if (router.query.id) {
      axiosInstance.get(`/collections/${router.query.id}`).then(data => {
        setCollectionData(data.data);
      });
    }
  }, [router]);
  const title = _get(collectionData, "title", "");
  const coverPhoto = _get(collectionData, "cover_photo.urls.small", "");
  const previewPhotos = _get(collectionData, "preview_photos", []);
  const userObj = _get(collectionData, "user", {});
  return (
    <Layout withOutSidebar>
      <div className="container">
        <h1 className="text-center">{title}</h1>
        {!_isEmpty(previewPhotos) &&
          previewPhotos.map((photo, i) => {
            const photoWithUserObj = {
              ...photo,
              user: {
                ...userObj
              }
            };
            return <CardComponent key={i} photo={photoWithUserObj} />;
          })}
      </div>
    </Layout>
  );
}
