import React from "react";
import Head from "next/head";

export default function MetaTags({
  title = "SplashPhotography",
  description = "High quality images from the famous API Unsplash. View images, users and other information about them.",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:url" content={`${process.env.DOMAIN}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="description" content={description} />
      <link rel="canonical" href={`${process.env.DOMAIN}`} />
    </Head>
  );
}
