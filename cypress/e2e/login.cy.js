/// <reference types="cypress" />

context ('Funcionaldade Login', () =>{

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
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