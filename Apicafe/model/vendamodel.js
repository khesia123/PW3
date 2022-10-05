/* IMPORT DO SEQUELIZE */
const Sequelize = require('sequelize');

/* IMPORT DA CONEXÃO */
const connection = require('../database/database');

/*
CRIAÇÃO DO MODELO DA TABELA CATEGORIA
MÉTODO: define
PARAMETROS:
1 - NOME DA TABELA - STRING
2 - JSON: REPRESENTA O CAMPO OU CAMPOS DA TABELA, SEUS TIPOS E SUAS  REGRAS.
*/
const Venda = connection.define(
    'tbl_venda',
    {
        nome_venda:{
            type: Sequelize.STRING(100),
            allowNull: false
        },
        quantidade_item:{
            type: Sequelize.STRING(100),
            allowNull: false
        },
        id_cliente:{
            type: Sequelize.STRING(100),
            allowNull: false
        }
    }
);

// Categoria.sync({force:true});

module.exports = Venda;
