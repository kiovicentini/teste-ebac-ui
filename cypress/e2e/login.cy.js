/// <reference types="cypress" />
const perfil = require ('../fixtures/perfil.json')
context ('Funcionaldade Login', () =>{

  beforeEach(() => {
    cy.visit('minha-conta/')
  });

 afterEach(() => {
    cy.screenshot()

 });

  it ('Deve fazer login com sucesso', () => {
      cy.get('#username').type('aluno_ebac@teste.com')
      cy.get('#password').type('teste@teste.com')
      cy.get('.woocommerce-form > .button').click()

      cy.get('.page-title').should('contain', 'Minha conta')
      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
  })

  it('Deve fazer login com sucesso - Usando arquivo de dados', () => {
    
    cy.get('#username').type(perfil.usuario)
      cy.get('#password').type(perfil.senha)
      cy.get('.woocommerce-form > .button').click()

      cy.get('.page-title').should('contain', 'Minha conta')

  });

  it.only('Deve fazer login com sucesso - Usando fixture', () => {
    cy.fixture('perfil').then(dados => {

      cy.get('#username').type(dados.usuario)
      cy.get('#password').type(dados.senha, {log:false})
      cy.get('.woocommerce-form > .button').click()

      cy.get('.page-title').should('contain', 'Minha conta')
    })
  });

  it ('Deve exibir uma mensagem de erro ao inserir usuário errado', () =>{
    cy.get('#username').type('pudim_ebac@teste.com')
    cy.get('#password').type('teste@pudim')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should ('contain', 'Endereço de e-mail desconhecido')
  })

  it ('Deve exibir uma mensagem de erro ao inserir senha errada', () =>{
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('pudim@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should ('contain', 'Erro: a senha fornecida para')
  })

})