const express = require('express');

const Cliente = require('../controller/ClienteController')

/** CONFIGURAÇÃO DAS ROTAS **/
const router = express.Router();

/** DEFINIÇÃO DAS ROTAS **/

/* ROTA DE INSERÇÃO DE CATEGORIA (VERBO HTTP: POST) */
/*
Métodos do verbo da rota:
1º - A rota em si
2º - A ação que a rota deve executar (arrow function)
*/

/* ROTA DE LISTAGEM GERAL DE CATEGORIA (VERBO HTTP: GET)*/
router.get('/cliente/listarCliente', (req, res)=>{
        //{order:['id', 'DESC']}
        cliente.findAll()
                .then(
                    (clientes)=>{
                        return res.status(200).json(clientes);
                    }
                ).catch((erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMensagem: erro
                    });
                });
    }
);

/* ROTA DE LISTAGEM POR ID DE CATEGORIA (VERBO HTTP: GET)*/
router.get('/cliente/listarCliente/:id', (req, res)=>{

    let {id} = req.params;
    // console.log("ID: " + id);

    cliente.findByPk(id)
            .then(
                (cliente)=>{
                    return res.status(200).send(cliente);
                }
            ).catch((erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMensagem: erro
                });
            });
});
router.post('/Apicafe/model/clientemodel.js'), (req, res)=>{

    let { nome_cliente } = req.body;

    Cliente.create(
        {nome_cliente}
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus:false,
                mensagemStatus:'cliente inserido com sucesso.'
            });
        }
    ).catch((erro)=>{
        return res.status(400).json({
            erroStatus: true,
            erroMensagem: erro
        });
    });
}
;


/* ROTA DE EXCLUSÃO DE CATEGORIA (VERBO HTTP: DELETE)*/
router.delete('/cliente/excluirCliente/:id', (req, res)=>{

        let {id} = req.params;

        cliente.destroy(
            {where: {id}}
        ).then(
            ()=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:'Cliente excluída com sucesso.'
                });
            }).catch((erro)=>{
            return res.status(400).json({
                erroStatus: true,
                erroMensagem: erro
            });
        });
    }
);

module.exports = router;