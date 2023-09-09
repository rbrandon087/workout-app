require("dotenv").config();

module.exports = {
  development: {
    username: "postgres",
    password: "workout_app2023!",
    database: "postgres",
    host: "db.zwcwryojtrkygrslhndl.supabase.co",
    logging: true,
    dialect: "postgres",
  },
  test: {
    username: "postgres",
    password: "workout_app2023!",
    database: "postgres",
    host: "db.zwcwryojtrkygrslhndl.supabase.co",
    dialect: "postgres",
  },
  production: {
    username: "postgres",
    password: "workout_app2023!",
    database: "postgres",
    host: "db.zwcwryojtrkygrslhndl.supabase.co",
    dialect: "postgres",
  },
};
