import Head from "next/head";

import CardComponent from "../components/Card";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

import { axiosInstance } from "../config";

const Home = ({ photos }) => {
  return (
    <Layout>
      <Head>
        <title>Splash Photos.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-2 card-columns">
        {photos.map((photo, i) => (
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

Home.getInitialProps = async () => {
  const response = await axiosInstance.get("/photos", {
    params: { page: 1, per_page: 10 }
  });

  return {
    photos: response.data
  };
};

export default Home;
