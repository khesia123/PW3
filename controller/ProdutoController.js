const express = require('express');

const router = express.Router();
const modelproduto = require('../model/produtomodel');


        router.get('/listarProduto', (req, res)=>{
    
            modelproduto.findAll()
                .then(
                    (produtos)=>{
                        return res.status(200).json(produtos);
                    }
                ).catch(
                    (erro)=>{
                        return res.status(400).json({
                            erroStatus: true,
                            erroMessagem: 'Houve um erro ao selecionar os dados de produto',
                            erroBancoDados: erro
                        });
                    }
                );
        
        });
    
        router.get('/listarProduto', (req, res)=>{
    
            modelproduto.findAll()
                .then(
                    (produtos)=>{
                        return res.status(200).json(produtos);
                    }
                ).catch(
                    (erro)=>{
                        return res.status(400).json({
                            erroStatus: true,
                            erroMessagem: 'Houve um erro ao selecionar os dados de produtos',
                            erroBancoDados: erro
                        });
                    }
                );
        
        });


        router.post('/inserirProduto', (req, res)=>{
            let {nome_produto} = req.body;
            
            modelproduto.create(
                {nome_produto}
            ).then(
                ()=>{
                        return res.status(201).json({
                            erroStatus: false,
                            menssagemStatus: 'Produto inserida com sucesso!'
                    });
                }
            ).catch(
                (erro)=>{
                            return res.status(400).json({
                                erroStatus: true,
                                erroMessagem: 'Houve um erro ao cadastrar produto',
                                erroBancoDados: erro
                            });
                }
            );
        
        });
        


        router.put('/alterarProduto', (req, res)=>{
            let {id, nome_produto} = req.body;
        
            modelproduto.update(
                {nome_produto},
                {where:{id}}
            ).then( ()=>{
        
                return res.status(200).json({
                    erroStatus: false,
                    menssagemStatus: 'Produto alterado com sucesso!'
                });
        
            }).catch(
                (erro)=>{
                            return res.status(400).json({
                                erroStatus: true,
                                erroMessagem: 'Houve um erro ao alterar Produto',
                                erroBancoDados: erro
                            });
                }
            );
        
        });




        router.delete('/excluirProduto/:id', (req, res)=>{

        
            let {id} = req.params;
        
            modelproduto.destroy(
                {where: {id}}
            ).then( ()=>{
        
                return res.status(200).json({
                    erroStatus: false,
                    menssagemStatus: 'Produto excluida com sucesso!'
                });
        
            }).catch(
                (erro)=>{
                            return res.status(400).json({
                                erroStatus: true,
                                erroMessagem: 'Houve um erro ao excluir produto',
                                erroBancoDados: erro
                            });
                }
            );
        
        });
        
        module.exports = router;
