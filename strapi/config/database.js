module.exports = () => ({
  connection: {
    client: "mysql",
    connection: {
      // connectionString: process.env.DATABASE_URL,
      host: process.env.AZURE_MYSQL_HOST,
      port: process.env.AZURE_MYSQL_PORT,
      database: process.env.AZURE_MYSQL_DATABASE,
      username: process.env.AZURE_MYSQL_USER,
      password: process.env.AZURE_MYSQL_PASSWORD,
    },
    useNullAsDefault: true,
  },
});
