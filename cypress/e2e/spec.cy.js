describe ('Exec',function () {
  before('Exec', function () {
    cy.exec('ls');
  });

  describe('Basic test', function () {
    it('test ', ()=>{
     cy.visit('docs.cypress.io');
    })
  })

})