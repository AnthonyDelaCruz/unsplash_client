import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            property="og:image"
            content={`${process.env.DOMAIN}/ApplicationSnapShot.png`}
          />
          <meta
            property="og:site_name"
            content={`${process.env.APPLICATION_NAME}`}
          />
          <meta
            property="fb:app_id"
            content={`${process.env.FACEBOOK_APP_ID}`}
          />
          <meta type="og:type" content="website" />
          <meta property="og:url" content={`${process.env.DOMAIN}`} />
          <link
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.scss"
            rel="stylesheet"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossOrigin="anonymous"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* this will import the font asynchronously so it wouldnt be render blocking */}
          <style>
            @import
            "//fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          </style>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
