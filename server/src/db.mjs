import pgp from "pg-promise";

import { load_dotenv_if_exists } from "./utils.mjs";

load_dotenv_if_exists();

const db = initDb();

export const getIncidents = () => db.any("SELECT * FROM incidents");

//get ONE incident
//not much different from get all but specify params in route.
export const getOneIncident = () =>
  db.any("SELECT * FROM incidents WHERE incident_number = ${incident_number}");
console.log(getOneIncident);
// export const addTask = (name) =>
//   db.one("INSERT INTO tasks(name) VALUES($<name>) RETURNING *", { name });

function initDb() {
  let connection;

  if (process.env.DATABASE_URL === undefined) {
    connection = {
      user: "postgres",
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: 5442,
    };
  } else {
    connection = {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    };
  }

  return pgp()(connection);
}
