
const Sequelize = require('sequelize');


const connection = new Sequelize(
    'api_cafeteria_bd',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
        timezone: '-03:00'
    }
);

module.exports = connection;