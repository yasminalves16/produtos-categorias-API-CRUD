import { Client } from "pg";

const database = new Client(
  process.env.NODE_ENV === "test"
    ? {
        user: "",
        host: "",
        database: "",
        password: "",
        port: 5432,
      }
    : {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
      }
);

export const startDatabase = async () => {
  await database.connect();
};

export default database;
