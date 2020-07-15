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
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
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
