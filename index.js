
const express = require('express');

console.log('TESTE DO GITHUBDESKTOP');
const clienteController = require('./controller/ClienteController');
const produtoController = require('./controller/ProdutoController');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/', clienteController);
app.use('/', produtoController);

app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO EM: http://localhost:3000');
});