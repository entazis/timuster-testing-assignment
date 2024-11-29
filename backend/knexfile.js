export default {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./db.sqlite",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
};
