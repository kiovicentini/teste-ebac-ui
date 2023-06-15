/// <reference types="cypress"/>


import enderecoPage from "../support/page-objects/endereco.page";
const dadosEndereco = require ('../fixtures/endereco.json')

describe('Funcionalidade Endereços - Faturamento e entrega', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })
        

    });
    
    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
        //login
        //cadastro de endereço
        enderecoPage.editarEnderecoFaturamento('Claire', 'Redfield', 'TerraSave', 'Brasil', 'Raccoon City', '1998', 'São Paulo', 'São Paulo', '01111111', '91999999', 'claire@teste.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.') 
        
        

    });

    it('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados', () => {
        //login
        //cadastro de endereço
        enderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email
         )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.') 
        
        

    });

});