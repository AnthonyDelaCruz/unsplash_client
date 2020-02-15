import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import Masonry from "react-masonry-component";

import CardComponent from "../components/Card";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";

import { unsplashInstance } from "../config";

const masonry = dynamic(() => import("react-masonry-component"));

const Home = ({ photos }) => {
  return (
    <Layout>
      <Head>
        <title>Splash Photos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="row">
        <Sidebar customClassName="col-md-3 d-none d-md-block" />
        <masonry className="hero w-100 col-md-9 col-sm-12 p-0">
          {photos.map(photo => (
            <CardComponent photo={photo} />
          ))}
        </masonry>
      </div>
      {/* styles */}
      <style jsx>{`
        .hero {
          flex: 2;
        }
      `}</style>
    </Layout>
  );
};

Home.getInitialProps = async () => {
  const response = await unsplashInstance.search.photos("dogs", 1, 10);
  return {
    photos: response.data.results
  };
};

export default Home;
