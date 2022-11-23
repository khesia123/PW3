
const Sequelize = require('sequelize');


const connection = require('../database/database');

const produto = connection.define(
    'tbl_produto',
    {
        nm_produto:{
            type: Sequelize.STRING(100),
            allowNull: false
        },
        qt_produto:{
            type: Sequelize.STRING(100),
            allowNull: false
        }
    }
);

// Categoria.sync({force:true});

module.exports = produto;
