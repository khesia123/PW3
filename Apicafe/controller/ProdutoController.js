const express = require('express');

const produto = require('../controller/ProdutoController')

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
router.get('/produto/listarProduto', (req, res)=>{
        //{order:['id', 'DESC']}
        produto.findAll()
                .then(
                    (produtos)=>{
                        return res.status(200).json(produtoss);
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
router.get('produtos/listarProdutos/:id', (req, res)=>{

    let {id} = req.params;
    // console.log("ID: " + id);

    produto.findByPk(id)
            .then(
                (produto)=>{
                    return res.status(200).send(produto);
                }
            ).catch((erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMensagem: erro
                });
            });
});


router.post('/Apicafe/model/produtomodel.js'), (req, res)=>{

    let { nm_produto } = req.body;

    Produto.create(
        {nm_produto, qt_produto}
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus:false,
                mensagemStatus:'produto inserido com sucesso.'
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

/* ROTA DE ALTERAÇÃO DE CATEGORIA (VERBO HTTP: PUT)*/
router.put('/produto/alterarProduto', (req, res)=>{

        // console.log(req.body);
        let {id, nm_produto} = req.body;

        cliente.update(
                {nm_produto},
                {where: {id}}
        ).then(
            ()=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:'Produto alterado com sucesso.'
                });
            }
        ).catch((erro)=>{
            return res.status(400).json({
                erroStatus: true,
                erroMensagem: erro
            });
        });
    }
);
/* ROTA DE EXCLUSÃO DE CATEGORIA (VERBO HTTP: DELETE)*/
router.delete('/produto/excluirProduto/:id', (req, res)=>{

        let {id} = req.params;

        produto.destroy(
            {where: {id}}
        ).then(
            ()=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:'Produto excluída com sucesso.'
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