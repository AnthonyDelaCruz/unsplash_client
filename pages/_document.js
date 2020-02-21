import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
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
