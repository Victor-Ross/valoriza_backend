module.exports = {
  "type": process.env.TYPE,
  "host": process.env.HOST,
  "port": 3306,
  "username": process.env.USER,
  "password": process.env.PASSWORD,
  "database": process.env.DATABASE,
  "synchronize": true,
  "logging": false,
  "entities": ["src/entity/**/*.ts"],
  "migrations": ["src/database/migrations/*.ts"],
  "cli": {
    "migrationsDir": "src/database/migrations",
    "entitiesDir": "src/entity"
  }
}