const fs = require('fs');

describe('Accessibility Tests', () => {
  before(() => {
    // Register a task to save the compliance results
    Cypress.on('task', {
      writeResults(results) {
        fs.writeFileSync('compliance-results.json', JSON.stringify(results, null, 2));
        return null;
      },
    });
  });

  it('Checks accessibility compliance', () => {
    cy.visit('https://openliberty.io/docs/latest/reference/javadoc/api/oauth-2.0.com.ibm.oauth.core.api.attributes.html?path=24.0.0.3/com.ibm.websphere.appserver.api.oauth_1.2-javadoc/index.html');
    cy.getCompliance().then((results) => {
      cy.task('writeResults', results);
    });
  });
});
