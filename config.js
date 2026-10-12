const dotenv = require('dotenv')

dotenv.config()

// SSL requis par la plupart des bases MySQL cloud (Aiven, etc.)
const ssl = process.env.MYSQL_SSL === 'true'
  ? (process.env.MYSQL_CA ? { ca: process.env.MYSQL_CA } : { rejectUnauthorized: false })
  : undefined

module.exports = {
  host: process.env.MYSQL_HOST,
  mysql: {
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT) || 3306,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    ssl,
    waitForConnections: true,
    connectionLimit: 10,
  },
}
