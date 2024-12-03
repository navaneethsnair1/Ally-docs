describe('Accessibility Tests', () => {
  it('Checks accessibility compliance', () => {
    cy.visit('https://openliberty.io/docs/latest/reference/javadoc/api/oauth-2.0.com.ibm.oauth.core.api.attributes.html?path=24.0.0.3/com.ibm.websphere.appserver.api.oauth_1.2-javadoc/index.html');
    cy.getCompliance("./OL_API/ol_api");
    cy.visit('https://openliberty.io/docs/latest/reference/javadoc/api/servlet-5.0.com.ibm.websphere.servlet.container.html?path=24.0.0.5/io.openliberty.servlet_1.1-javadoc/index.html');
    cy.getCompliance("./OL_API/ol_api_overview2");
  });
});
