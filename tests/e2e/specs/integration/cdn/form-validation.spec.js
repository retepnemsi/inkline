describe('Integration', () => {
    describe('CDN', () => {
        it('Basic installation', () => {
            cy.visit(`/e2e/integration/cdn.spec.html`);

            cy.contains('h1', 'Inkline');
            cy.contains('p', 'Inkline');

            cy
                .get('a.button')
                .should('contain', 'Documentation')
                .should('have.attr', 'href')
                .then((href) => expect(href).to.contain('https://inkline.io'));
        });

        it('Basic installation with validation', () => {
            cy.visit(`/e2e/integration/cdn.spec.html`);

            cy.contains('h1', 'Inkline');
            cy.contains('p', 'Inkline');

            cy
                .get('a.button')
                .should('contain', 'Documentation')
                .should('have.attr', 'href')
                .then((href) => expect(href).to.contain('https://inkline.io'));
        });
    });
});
