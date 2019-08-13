describe('Integration', () => {
    describe('CDN', () => {
        describe('Form Validation', () => {
            it('should render a simple page with form validation', () => {
                cy.visit(`/e2e/integration/cdn/form-validation.spec.html`);

                cy.contains('h1', 'Inkline');
                cy.contains('p', 'Inkline');
                cy.contains('form');

                cy
                    .get('.form-input > input')
                    .should('exist')
                    .type('John Doe')
                    .clear();

                cy
                    .get('.form-group.-error')
                    .should('exist');
            });
        });
    });
});
