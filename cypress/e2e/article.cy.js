import headlines from '../fixtures/headlines-data.json'

describe('Home View', () => {
  it('should display content when artilce is clicked', () => {
    cy.intercept('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=6fd0aa3c07fd4afab7c7258b44ec251e', {
      statusCode: 200,
      body: headlines
    })
    cy.visit('http://localhost:3000/')
    cy.get('.Card').first().click()

    cy.get('.header-img').should('be.visible')
    cy.get('h1').should('have.text', 'Major Xbox plans leaked in emails made public on Microsoft’s FTC case - NBC News')
    cy.get('.article-img').should('be.visible')
    cy.get('.article-date').should('have.text', '09-19-2023 at 10:10am')
    cy.get('.article-author').should('have.text', 'By Kevin Collier')
    cy.get('.article-source').should('have.text', 'From NBC News')
    cy.get('.article-content').should('have.text', "A huge collection of purported Xbox files related to the Federal Trade Commissions case against Microsoft have been published online, spilling some of the company's plans for the gaming console into … [+1498 chars]")
    cy.get('.article-button').should('have.text', 'View original article')
  })
  
  it('go back to home view when logo is clicked', () => {
    cy.intercept('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=6fd0aa3c07fd4afab7c7258b44ec251e', {
      statusCode: 200,
      body: headlines
    })

    cy.visit('http://localhost:3000/')
    cy.get('.Card').first().click()
    cy.get('.header-img').click()

    cy.get('.Card').should('have.length', 13)
    cy.get('.Card > .title-and-img > .card-title').first().should('have.text', 'Major Xbox plans leaked in emails made public on Microsoft’s FTC case - NBC News')
    cy.get('.Card > .title-and-img > .card-date').first().should('have.text', '09-19-2023 at 10:10am')
    cy.get('.Card > .card-description').first().should('have.text', 'A huge collection of purported Xbox files related to the Federal Trade Commission’s case against Microsoft have been published online.')

    cy.get('.Card > .title-and-img > .card-title').last().should('have.text', 'Disney to Invest $60 Billion in Theme Parks, Cruises Over Next Decade - The Wall Street Journal')
    cy.get('.Card > .title-and-img > .card-date').last().should('have.text', '09-19-2023 at 7:23am')
    cy.get('.Card > .card-description').last().should('have.text', 'Company says it would expand its parks and cruise line capacities')
  })
})