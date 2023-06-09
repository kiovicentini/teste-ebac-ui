/// <reference types="cypress" />

describe ('Funcionalidade da página de produtos',() => {

    beforeEach(() => {
        cy.visit ('produtos/')
    });

    it ('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    })

    it.only('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 10

        cy.get('[class="product-block grid"]').contains('Atlas Fitness Tank').click()
        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade)
        
        //cy.get('.plus')
            //.click()
            //.click()

        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade, ' × “Atlas Fitness Tank” foram adicionados no seu carrinho.')

    });

});