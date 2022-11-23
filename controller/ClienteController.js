const express = require('express');

const router = express.Router();
const modelcliente = require('../model/clientemodel');


router.get('/listarCliente', (req, res)=>{


        modelcliente.findAll()
            .then(
                (clientes)=>{
                    return res.status(200).json(clintes);
                }
            ).catch(
                (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao selecionar os dados de clientes',
                        erroBancoDados: erro
                    });
                }
            );
    
    });

    router.get('/listarCliente/:id',(req, res)=>{

        let {id} = req.params;
    
        modelcliente.findByPk(id)
            .then(
                (clientes)=>{
                    res.status(200).json(clientes);
                }
            ).catch(
                (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao selecionar os dados de clientes',
                        erroBancoDados: erro
                    });
                }
            );
    
    });


        router.post('/inserirCliente', (req, res)=>{
            let {nome_cliente} = req.body;
            
            modelCliente.create(
                {nome_cliente}
            ).then(
                ()=>{
                        return res.status(201).json({
                            erroStatus: false,
                            menssagemStatus: 'Cliente inserida com sucesso!'
                    });
                }
            ).catch(
                (erro)=>{
                            return res.status(400).json({
                                erroStatus: true,
                                erroMessagem: 'Houve um erro ao cadastrar cliente',
                                erroBancoDados: erro
                            });
                }
            );
        
        });

        router.put('/alterarCliente', (req, res)=>{

            
            let {id, nome_cliente} = req.body;
        
            modelCliente.update(
                {nome_cliente},
                {where:{id}}
            ).then( ()=>{
        
                return res.status(200).json({
                    erroStatus: false,
                    menssagemStatus: 'Cliente alterado com sucesso!'
                });
        
            }).catch(
                (erro)=>{
                            return res.status(400).json({
                                erroStatus: true,
                                erroMessagem: 'Houve um erro ao alterar cliente',
                                erroBancoDados: erro
                            });
                }
            );
        
        });



        router.delete('/excluirCliente/:id', (req, res)=>{
        
            let {id} = req.params;
        
            modelCliente.destroy(
                {where: {id}}
            ).then( ()=>{
        
                return res.status(200).json({
                    erroStatus: false,
                    menssagemStatus: 'Cliente excluida com sucesso!'
                });
        
            }).catch(
                (erro)=>{
                            return res.status(400).json({
                                erroStatus: true,
                                erroMessagem: 'Houve um erro ao excluir cliente',
                                erroBancoDados: erro
                            });
                }
            );
        
        });
        

        
        module.exports = router;
