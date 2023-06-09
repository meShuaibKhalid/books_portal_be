require('dotenv').config();

const Sequelize = require('sequelize'),
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: 'mariadb',
        port: 18124,
        dialectOptions: {
            connectTimeout: 5000, // Set a higher value if needed (in milliseconds)
        },
        pool: {
            min: 0,
            max: 5,
        },
        define: {
            charset: 'utf8',
            timestamps: false
        },
        benchmark: false,
        logging: false
    })
module.exports = sequelize;