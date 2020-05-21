context('Testing buttons, filter and nav links', () => {
    it('button to add bike is disabled when the form fields are empty', () => {
        //-> Eerst de gebruiker inloggen. Dit is nodig omdat het scherm om een bike toe te voegen enkel verschijnt bij de admin
        cy.visit('http://localhost:4200/bike/add');
        cy.url().should('include', 'http://localhost:4200/login');
        cy.get('[data-cy=loginB]').click();
        cy.get('[data-cy=name]').type(Cypress.env("emailA"));
        cy.get('[data-cy=password]').type(Cypress.env("passwordA"),{ log: false });
        cy.get('[data-cy=loginU]').click();

        cy.url().should('include', 'http://localhost:4200/bike/add')

        // cy.visit('http://localhost:4200/bike/add');
        cy.get('[data-cy=buttonAddBike]').should('be.disabled');
    })
    it('nav links should not be visible for a customer',() =>{
        cy.visit('http://localhost:4200/login');
        cy.get('[data-cy=loginB]').click();
        cy.get('[data-cy=name]').type(Cypress.env("emailD"));
        cy.get('[data-cy=password]').type(Cypress.env("passwordD"),{ log: false });
        cy.get('[data-cy=loginU]').click();

        cy.url().should('include', 'http://localhost:4200/bike')

        cy.get('[data-cy=routerLinks]').should('not.exist');

    })
    it('Test bike filter', () => {
        cy.visit('http://localhost:4200/bike/list');
        cy.get('[data-cy=allRoadBikesFilter]').click();
        cy.get('[data-cy=bike]').should('have.length',2);
    })

})