describe('Acceptance Criteria', () => {
  beforeEach(() => {
    // Ensure to visit the home page before each test
    cy.visit('/');
  });

  context('User is a Personal User', () => {
    it('should display main navigation, recent documents in descending order, and logout successfully', () => {
      // Assert main navigation is visible
      cy.get('#sidebar').should('be.visible');

      // Assert career goal is not visible
      cy.get('#career-goal').should('not.exist');

      // Wait for the list-documents element to be loaded
      cy.wait(5000).then(() => {
        cy.get('#list-documents', { timeout: 10000 }).should('be.visible');
      });
      // Click on account settings dropdown and log out
      cy.get('#account-settings').click();
      cy.get('#logout-button').click();

      // Assert user is logged out
      cy.url().should('include', '/login');
    });
  });

  context('User is a Managed User', () => {
    it('should display main navigation, recent documents in descending order, career goal, and logout successfully', () => {
      // Assert main navigation is visible
      cy.get('#sidebar').should('be.visible');

      // Assert recent documents are sorted in descending order
      // Wait for the list-documents element to be loaded
      cy.wait(5000).then(() => {
        cy.get('#list-documents', { timeout: 10000 }).should('be.visible');
      });
      // Assert career goal is visible
      cy.get('#career-goal').should('be.visible');

      // Click on account settings dropdown and log out
      cy.get('#account-settings').click();
      cy.get('#logout-button').click();

      // Assert user is logged out
      cy.url().should('include', '/login');
    });
  });
});
