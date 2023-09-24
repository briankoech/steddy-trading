module.exports = () => ({
  connection: {
    client: "mysql",
    connection: {
      connectionString: process.env.DATABASE_URL,
    },
    useNullAsDefault: true,
  },
});
