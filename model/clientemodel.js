
const Sequelize = require('sequelize');

const connection = require('../database/database');

const Cliente = connection.define(
    'tbl_cliente',
    {
        nm_cliente:{
            type: Sequelize.STRING(100),
            allowNull: false
        }
    }
);

// Categoria.sync({force:true});

module.exports = Cliente;
