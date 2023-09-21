import headlines from '../fixtures/headlines-data.json'

describe('Home View', () => {
  it('should display articles', () => {
    cy.intercept('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=6fd0aa3c07fd4afab7c7258b44ec251e', {
      statusCode: 200,
      body: headlines
    })
    cy.visit('http://localhost:3000/')
    //assert that header, articles, dropdown, p tag are all visible
    cy.get('.header-img').should('be.visible')
    cy.get('h1').should('have.text', 'Look at headlines in:')
    cy.get('#categories-dropdown').should('be.visible')
    //assert that there are the expected number of articles
    cy.get('[href="/article/Major Xbox plans leaked in emails made public on Microsoft’s FTC case - NBC News"]')
    //assert that first artile has img, title, description, and date
    //assert that last artile has img, title, description, and date
  })
  it('should display articles', () => {
    cy.intercept('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=6fd0aa3c07fd4afab7c7258b44ec251e', {
      statusCode: 200,
      body: headlines
    })
    cy.visit('http://localhost:3000/')
    //select science

    //assert that there are the expected number of articles
    //assert that first artile has img, title, description, and date
    //assert that last artile has img, title, description, and date
  })
})