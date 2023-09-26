module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: process.env.WEBSITE_HOSTNAME,
  app: {
    keys: env.array("APP_KEYS"),
  },
});
