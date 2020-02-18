import Head from "next/head";

import CardComponent from "../components/Card";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

import { axiosInstance } from "../config";

const Home = () => {
  const [photos, setPhotos] = React.useState();

  React.useEffect(() => {
    axiosInstance
      .get("/photos", {
        params: { page: 1, per_page: 6 }
      })
      .then(response => setPhotos(response.data));
  }, []);

  return (
    <Layout>
      <Head>
        <title>Splash Photos.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-2 card-columns">
        {photos &&
          photos.map((photo, i) => (
            <CardComponent
              customClassName="card-container mb-2"
              photo={photo}
              key={i}
            />
          ))}
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

export default Home;
