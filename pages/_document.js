import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
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
