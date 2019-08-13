describe('Integration', () => {
    describe('CDN', () => {
        describe('Inkline', () => {
            it('should render a simple page with text and a button', () => {
                cy.visit(`/e2e/integration/cdn/inkline.spec.html`);

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
});
