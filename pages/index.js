import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import CardComponent from "../components/Card";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

import { unsplashInstance } from "../config";

const MasonryComponent = dynamic(() => import("react-masonry-component"), {
  ssr: false
});

const Home = ({ photos }) => {
  return (
    <Layout>
      <Head>
        <title>Splash Photos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MasonryComponent>
        {photos.map((photo, i) => (
          <CardComponent photo={photo} key={i} />
        ))}
      </MasonryComponent>
      <Footer />
      {/* styles */}
      <style jsx>{`
        .hero {
          flex: 2;
          background: grey;
        }
      `}</style>
    </Layout>
  );
};

Home.getInitialProps = async () => {
  const response = await unsplashInstance.photos.listPhotos(1, 10, "latest");
  return {
    photos: response.data
  };
};

export default Home;
