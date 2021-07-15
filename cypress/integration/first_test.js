/* eslint-disable no-undef */
describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })

  it('valid content when navigate', () => {
    cy.visit('http://localhost:5000')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
    cy.contains('charmeleon').click()

    cy.contains('blaze')
    cy.contains('solar power')
  })
})
