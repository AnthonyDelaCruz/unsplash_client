import Head from "next/head";

export default function Metahelpers({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
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
  );
}
