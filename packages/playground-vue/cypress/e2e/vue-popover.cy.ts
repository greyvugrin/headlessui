describe('popover click', () => {
  it('passes', () => {
    cy.visit('http://localhost:9000/popover/popover')

    cy.get('#headlessui-popover-button-1').click()
    cy.get('[data-test="normal-link"]').first().click()
  })
})
