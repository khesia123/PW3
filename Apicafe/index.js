/* Importação do pacote express */
const express = require('express');

/*Instancia executavel do express */
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

/*Importação da conexão com o banco de dados*/
// const connection = require('./database/database');

/*Importação das models*/
const Cliente = require('./model/clientemodel');
const Produto = require('./model/produtomodel');


/*Importação das rotas*/
const clienteController = require('./controller/ClienteController');
app.use('/', clienteController);

const produtoController = require('./controller/ProdutoController');
app.use('/', produtoController);


/*Servidor de requisições da aplicação */
app.listen(3000, ()=>{
    console.log('Servidor Rodando na Porta 3000 - URL: http://Localhost3000');
}); 