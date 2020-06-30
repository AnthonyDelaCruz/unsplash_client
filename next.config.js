require("dotenv").config();

const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  cssModules: true,
  env: {
    ACCESS_KEY: "4R1BV8McLjiQT_GSQGzWp5ovnhWWxWA7Exhf4imVjtc",
    DOMAIN:
      process.env.NODE_ENV === "production"
        ? "http://unsplash-client.now.sh"
        : "http://localhost:3000",
    APPLICATION_NAME: "SplashPhotography",
    APPLICATION_NAME_SHORT: "SP",
  },
});
